import 'dart:math';

import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class EncryptionStore {
  static const _storage = FlutterSecureStorage();
  static const _hiveKey = 'mupil_hive_key';

  static Future<List<int>> loadOrCreateHiveKey() async {
    final cached = await _storage.read(key: _hiveKey);
    if (cached != null) {
      return cached.codeUnits;
    }

    final random = Random.secure();
    final key = List<int>.generate(32, (_) => random.nextInt(256));
    await _storage.write(key: _hiveKey, value: String.fromCharCodes(key));
    return key;
  }
}
