import 'package:flutter/services.dart';

class UsageService {
  UsageService._();
  static final UsageService instance = UsageService._();

  static const MethodChannel _channel = MethodChannel('mupil/usage');

  Future<bool> hasUsagePermission() async {
    return (await _channel.invokeMethod<bool>('hasUsagePermission')) ?? false;
  }

  Future<void> openUsageSettings() async {
    await _channel.invokeMethod('openUsageSettings');
  }

  Future<List<Map<String, dynamic>>> dailyUsage(DateTime day) async {
    final result = await _channel.invokeMethod<List<dynamic>>(
      'getDailyUsage',
      {'epochMillis': day.millisecondsSinceEpoch},
    );
    return (result ?? <dynamic>[]).cast<Map>().map((e) {
      return e.cast<String, dynamic>();
    }).toList();
  }
}
