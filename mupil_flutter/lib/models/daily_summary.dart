import 'package:hive/hive.dart';

part 'daily_summary.g.dart';

@HiveType(typeId: 2)
class DailySummary {
  @HiveField(0)
  final DateTime date;

  @HiveField(1)
  final int totalScreenMillis;

  @HiveField(2)
  final int totalBackgroundMillis;

  @HiveField(3)
  final int totalWifiBytes;

  @HiveField(4)
  final int totalMobileBytes;

  @HiveField(5)
  final List<String> topApps;

  const DailySummary({
    required this.date,
    required this.totalScreenMillis,
    required this.totalBackgroundMillis,
    required this.totalWifiBytes,
    required this.totalMobileBytes,
    required this.topApps,
  });
}
