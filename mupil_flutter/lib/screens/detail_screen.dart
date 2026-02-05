import 'package:flutter/material.dart';

import '../models/app_usage.dart';
import '../services/mupil_api.dart';
import '../widgets/app_list_tile.dart';

class DetailScreen extends StatefulWidget {
  static const route = '/details';

  const DetailScreen({super.key});

  @override
  State<DetailScreen> createState() => _DetailScreenState();
}

class _DetailScreenState extends State<DetailScreen> {
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
      appBar: AppBar(title: const Text('Per-App Details')),
      body: ListView.builder(
        itemCount: _usage.length,
        itemBuilder: (_, index) => AppListTile(usage: _usage[index]),
      ),
    );
  }
}
