import '../models/app_usage.dart';
import '../models/daily_summary.dart';
import 'background_service.dart';
import 'network_service.dart';
import 'usage_service.dart';

/// REST-like Dart facade consumed by UI widgets.
class MupilApi {
  Future<bool> ensureUsagePermission() async {
    final hasPermission = await UsageService.instance.hasUsagePermission();
    if (!hasPermission) {
      await UsageService.instance.openUsageSettings();
      return false;
    }
    return true;
  }

  Future<List<AppUsage>> getDailyAppUsage(DateTime day) async {
    final usage = await UsageService.instance.dailyUsage(day);
    final traffic = await NetworkService.instance.appTraffic();

    final trafficByPackage = {
      for (final entry in traffic) entry['packageName'] as String: entry,
    };

    return usage.map((entry) {
      final network = trafficByPackage[entry['packageName']] ?? const {};
      return AppUsage(
        packageName: entry['packageName'] as String,
        appName: entry['appName'] as String? ?? entry['packageName'] as String,
        date: day,
        foregroundMillis: entry['foregroundMillis'] as int? ?? 0,
        backgroundMillis: entry['backgroundMillis'] as int? ?? 0,
        wifiBytes: network['wifiBytes'] as int? ?? 0,
        mobileBytes: network['mobileBytes'] as int? ?? 0,
        launches: entry['launches'] as int? ?? 0,
      );
    }).toList();
  }

  Future<DailySummary> getDailySummary(DateTime day) async {
    final items = await getDailyAppUsage(day);
    items.sort((a, b) => b.foregroundMillis.compareTo(a.foregroundMillis));

    return DailySummary(
      date: day,
      totalScreenMillis: items.fold(0, (sum, x) => sum + x.foregroundMillis),
      totalBackgroundMillis: items.fold(0, (sum, x) => sum + x.backgroundMillis),
      totalWifiBytes: items.fold(0, (sum, x) => sum + x.wifiBytes),
      totalMobileBytes: items.fold(0, (sum, x) => sum + x.mobileBytes),
      topApps: items.take(5).map((e) => e.appName).toList(),
    );
  }

  Future<void> startBackgroundTracking() =>
      BackgroundService.instance.startForegroundCollector();
}
