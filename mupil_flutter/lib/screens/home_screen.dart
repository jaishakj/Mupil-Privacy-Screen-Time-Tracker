import 'package:flutter/material.dart';

import '../models/app_usage.dart';
import '../services/export_service.dart';
import '../services/mupil_api.dart';
import '../widgets/app_list_tile.dart';
import '../widgets/usage_card.dart';

class HomeScreen extends StatefulWidget {
  static const route = '/';

  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final _api = MupilApi();
  final _export = ExportService();
  List<AppUsage> _usage = [];
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final hasPermission = await _api.ensureUsagePermission();
    if (!hasPermission) {
      setState(() => _loading = false);
      return;
    }

    final usage = await _api.getDailyAppUsage(DateTime.now());
    final summary = await _api.getDailySummary(DateTime.now());

    setState(() {
      _usage = usage;
      _loading = false;
    });

    if (summary.totalScreenMillis == 0) {
      await _api.startBackgroundTracking();
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_loading) {
      return const Scaffold(body: Center(child: CircularProgressIndicator()));
    }

    final totalMinutes = _usage.fold<int>(0, (s, e) => s + e.foregroundMillis) ~/ 60000;

    return Scaffold(
      appBar: AppBar(
        title: const Text('Mupil'),
        actions: [
          PopupMenuButton<String>(
            onSelected: (value) async {
              if (value == 'json') await _export.exportJson(_usage);
              if (value == 'csv') await _export.exportCsv(_usage);
            },
            itemBuilder: (_) => const [
              PopupMenuItem(value: 'json', child: Text('Export JSON')),
              PopupMenuItem(value: 'csv', child: Text('Export CSV')),
            ],
          )
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          UsageCard(title: 'Today Screen Time', value: '$totalMinutes min'),
          const SizedBox(height: 12),
          UsageCard(title: 'Tracked Apps', value: '${_usage.length}'),
          const SizedBox(height: 12),
          ..._usage.map((entry) => AppListTile(usage: entry)),
        ],
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: 0,
        onTap: (idx) {
          if (idx == 1) Navigator.pushNamed(context, '/details');
          if (idx == 2) Navigator.pushNamed(context, '/insights');
        },
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
          BottomNavigationBarItem(icon: Icon(Icons.apps), label: 'Details'),
          BottomNavigationBarItem(icon: Icon(Icons.insights), label: 'Insights'),
        ],
      ),
    );
  }
}
