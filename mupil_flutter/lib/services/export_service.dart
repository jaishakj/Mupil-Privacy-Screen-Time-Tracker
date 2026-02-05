import 'dart:convert';
import 'dart:io';

import 'package:path_provider/path_provider.dart';
import 'package:share_plus/share_plus.dart';

import '../models/app_usage.dart';

class ExportService {
  Future<void> exportJson(List<AppUsage> usage) async {
    final dir = await getTemporaryDirectory();
    final file = File('${dir.path}/mupil_export.json');

    await file.writeAsString(jsonEncode(
      usage
          .map((e) => {
                'packageName': e.packageName,
                'appName': e.appName,
                'date': e.date.toIso8601String(),
                'foregroundMillis': e.foregroundMillis,
                'backgroundMillis': e.backgroundMillis,
                'wifiBytes': e.wifiBytes,
                'mobileBytes': e.mobileBytes,
                'launches': e.launches,
              })
          .toList(),
    ));

    await SharePlus.instance.share(
      ShareParams(files: [XFile(file.path)], text: 'Mupil JSON export'),
    );
  }

  Future<void> exportCsv(List<AppUsage> usage) async {
    final dir = await getTemporaryDirectory();
    final file = File('${dir.path}/mupil_export.csv');
    final rows = <String>[
      'packageName,appName,date,foregroundMillis,backgroundMillis,wifiBytes,mobileBytes,launches',
      ...usage.map((e) =>
          '${e.packageName},${e.appName},${e.date.toIso8601String()},${e.foregroundMillis},${e.backgroundMillis},${e.wifiBytes},${e.mobileBytes},${e.launches}'),
    ];

    await file.writeAsString(rows.join('\n'));
    await SharePlus.instance.share(
      ShareParams(files: [XFile(file.path)], text: 'Mupil CSV export'),
    );
  }
}
