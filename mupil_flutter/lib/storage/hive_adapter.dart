import 'package:hive/hive.dart';

import '../models/app_usage.dart';
import '../models/daily_summary.dart';
import 'encryption.dart';

class HiveStore {
  static const appUsageBox = 'app_usage_box';
  static const summaryBox = 'daily_summary_box';

  static Future<void> openEncryptedBoxes() async {
    final key = await EncryptionStore.loadOrCreateHiveKey();
    final cipher = HiveAesCipher(key);
    await Hive.openBox<AppUsage>(appUsageBox, encryptionCipher: cipher);
    await Hive.openBox<DailySummary>(summaryBox, encryptionCipher: cipher);
  }
}

Future<void> registerHiveAdapters() async {
  if (!Hive.isAdapterRegistered(1)) Hive.registerAdapter(AppUsageAdapter());
  if (!Hive.isAdapterRegistered(2)) {
    Hive.registerAdapter(DailySummaryAdapter());
  }
  await HiveStore.openEncryptedBoxes();
}
