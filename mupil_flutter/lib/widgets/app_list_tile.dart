import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

import '../models/app_usage.dart';

class AppListTile extends StatelessWidget {
  final AppUsage usage;

  const AppListTile({super.key, required this.usage});

  @override
  Widget build(BuildContext context) {
    final minutes = (usage.foregroundMillis / 60000).toStringAsFixed(0);
    final data = NumberFormat('0.0').format(usage.totalDataMb);

    return ListTile(
      title: Text(usage.appName),
      subtitle: Text('$minutes min • $data MB'),
      trailing: Text('${usage.launches}x'),
    );
  }
}
