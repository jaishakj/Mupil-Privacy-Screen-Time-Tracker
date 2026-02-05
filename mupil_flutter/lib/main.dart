import 'package:flutter/material.dart';
import 'package:hive_flutter/hive_flutter.dart';

import 'models/app_usage.dart';
import 'models/daily_summary.dart';
import 'screens/detail_screen.dart';
import 'screens/home_screen.dart';
import 'screens/insights_screen.dart';
import 'services/background_service.dart';
import 'storage/hive_adapter.dart';
import 'themes/dark_theme.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Hive.initFlutter();
  await registerHiveAdapters();
  await BackgroundService.instance.initialize();

  runApp(const MupilApp());
}

class MupilApp extends StatelessWidget {
  const MupilApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Mupil',
      debugShowCheckedModeBanner: false,
      theme: DarkTheme.themeData,
      initialRoute: HomeScreen.route,
      routes: {
        HomeScreen.route: (_) => const HomeScreen(),
        DetailScreen.route: (_) => const DetailScreen(),
        InsightsScreen.route: (_) => const InsightsScreen(),
      },
    );
  }
}
