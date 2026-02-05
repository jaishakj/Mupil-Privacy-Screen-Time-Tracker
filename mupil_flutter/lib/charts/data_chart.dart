import 'package:fl_chart/fl_chart.dart';
import 'package:flutter/material.dart';

import '../models/app_usage.dart';

class DataChart extends StatelessWidget {
  final List<AppUsage> usage;

  const DataChart({super.key, required this.usage});

  @override
  Widget build(BuildContext context) {
    final total = usage.fold<double>(0, (sum, x) => sum + x.totalDataMb);
    if (total == 0) return const SizedBox(height: 220);

    return SizedBox(
      height: 220,
      child: PieChart(
        PieChartData(
          sectionsSpace: 2,
          centerSpaceRadius: 32,
          sections: usage.take(5).map((item) {
            final value = item.totalDataMb;
            return PieChartSectionData(
              value: value,
              title: item.appName,
              radius: 80,
              titleStyle: const TextStyle(fontSize: 10),
            );
          }).toList(),
        ),
      ),
    );
  }
}
