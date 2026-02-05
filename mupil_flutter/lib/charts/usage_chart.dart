import 'package:fl_chart/fl_chart.dart';
import 'package:flutter/material.dart';

import '../models/app_usage.dart';

class UsageChart extends StatelessWidget {
  final List<AppUsage> usage;

  const UsageChart({super.key, required this.usage});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 220,
      child: BarChart(
        BarChartData(
          alignment: BarChartAlignment.spaceBetween,
          titlesData: const FlTitlesData(show: false),
          borderData: FlBorderData(show: false),
          barGroups: usage.take(7).toList().asMap().entries.map((entry) {
            return BarChartGroupData(
              x: entry.key,
              barRods: [
                BarChartRodData(
                  toY: entry.value.foregroundMillis / 60000,
                  color: Theme.of(context).colorScheme.primary,
                  width: 12,
                  borderRadius: BorderRadius.circular(3),
                ),
              ],
            );
          }).toList(),
        ),
      ),
    );
  }
}
