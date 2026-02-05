import 'package:hive/hive.dart';

part 'app_usage.g.dart';

@HiveType(typeId: 1)
class AppUsage {
  @HiveField(0)
  final String packageName;

  @HiveField(1)
  final String appName;

  @HiveField(2)
  final DateTime date;

  @HiveField(3)
  final int foregroundMillis;

  @HiveField(4)
  final int backgroundMillis;

  @HiveField(5)
  final int wifiBytes;

  @HiveField(6)
  final int mobileBytes;

  @HiveField(7)
  final int launches;

  const AppUsage({
    required this.packageName,
    required this.appName,
    required this.date,
    required this.foregroundMillis,
    required this.backgroundMillis,
    required this.wifiBytes,
    required this.mobileBytes,
    required this.launches,
  });

  double get totalDataMb => (wifiBytes + mobileBytes) / (1024 * 1024);
}
