import 'package:flutter/material.dart';

import '../charts/data_chart.dart';
import '../charts/usage_chart.dart';
import '../models/app_usage.dart';
import '../services/mupil_api.dart';

class InsightsScreen extends StatefulWidget {
  static const route = '/insights';

  const InsightsScreen({super.key});

  @override
  State<InsightsScreen> createState() => _InsightsScreenState();
}

class _InsightsScreenState extends State<InsightsScreen> {
  final _api = MupilApi();
  List<AppUsage> _usage = [];

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final usage = await _api.getDailyAppUsage(DateTime.now());
    setState(() => _usage = usage);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Insights')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          const Text('Screen Time by App'),
          UsageChart(usage: _usage),
          const SizedBox(height: 24),
          const Text('Data Usage Share'),
          DataChart(usage: _usage),
        ],
      ),
    );
  }
}
