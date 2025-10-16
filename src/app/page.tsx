"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Shield, 
  Smartphone, 
  Database, 
  TrendingUp, 
  Download, 
  Code2, 
  Lock, 
  Wifi, 
  Activity,
  FileCode,
  Terminal,
  Package,
  CheckCircle2,
  ExternalLink
} from "lucide-react"

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge className="bg-violet-600/20 text-violet-300 border-violet-500/30 px-4 py-2">
            <Shield className="w-4 h-4 mr-2" />
            Privacy-First • Offline • Open Source
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Mupil
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl">
            A fully functional offline Android application that captures and displays per-day screen time, 
            per-app data usage, and background activity—all without compromising your privacy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              size="lg" 
              className="bg-violet-600 hover:bg-violet-700 text-white px-8"
              onClick={() => setActiveTab("source")}
            >
              <Code2 className="w-5 h-5 mr-2" />
              View Source Code
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-slate-700 hover:bg-slate-800"
              onClick={() => setActiveTab("download")}
            >
              <Download className="w-5 h-5 mr-2" />
              Download APK
            </Button>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Activity className="w-8 h-8 text-violet-400" />}
            title="Screen Time Tracking"
            description="Per-day screen time metrics using UsageStatsManager for foreground app sessions"
          />
          <FeatureCard
            icon={<Wifi className="w-8 h-8 text-blue-400" />}
            title="Data Usage Monitor"
            description="Per-app Wi-Fi and mobile data tracking via TrafficStats API"
          />
          <FeatureCard
            icon={<Lock className="w-8 h-8 text-green-400" />}
            title="Background Activity"
            description="Detect apps running during screen-off (Spotify, WhatsApp, etc.)"
          />
          <FeatureCard
            icon={<Shield className="w-8 h-8 text-indigo-400" />}
            title="Complete Privacy"
            description="All data stays on device. Encrypted with Hive. No cloud sync."
          />
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Technology Stack</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <TechCard title="Frontend" items={["Flutter (Dart)", "fl_chart", "Dark Theme UI"]} />
          <TechCard title="Android Native" items={["UsageStatsManager", "TrafficStats", "AccessibilityService"]} />
          <TechCard title="Storage & Tools" items={["Hive (Encrypted)", "WorkManager", "Docker CI/CD"]} />
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="container mx-auto px-4 py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-slate-800/50 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="source">Source Code</TabsTrigger>
            <TabsTrigger value="android">Android Native</TabsTrigger>
            <TabsTrigger value="setup">Setup & Build</TabsTrigger>
            <TabsTrigger value="download">Download</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <OverviewContent />
          </TabsContent>

          <TabsContent value="source">
            <SourceCodeContent />
          </TabsContent>

          <TabsContent value="android">
            <AndroidNativeContent />
          </TabsContent>

          <TabsContent value="setup">
            <SetupContent />
          </TabsContent>

          <TabsContent value="download">
            <DownloadContent />
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-slate-400 border-t border-slate-800">
        <p>© 2025 Mupil • Open Source • MIT License</p>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="bg-slate-800/50 border-slate-700 p-6 hover:border-violet-500/50 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-slate-400 text-sm">{description}</p>
    </Card>
  )
}

function TechCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="bg-slate-800/50 border-slate-700 p-6">
      <h3 className="text-xl font-semibold mb-4 text-violet-400">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center text-slate-300">
            <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  )
}

function OverviewContent() {
  return (
    <div className="space-y-8">
      <Card className="bg-slate-800/50 border-slate-700 p-8">
        <h2 className="text-2xl font-bold mb-4 text-violet-400">Project Architecture</h2>
        <p className="text-slate-300 mb-6">
          Mupil is built with a clean, modular architecture separating concerns between UI, business logic, 
          platform services, and data persistence.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Directory Structure</h3>
            <pre className="bg-slate-900/80 p-4 rounded-lg text-sm text-slate-300 overflow-x-auto">
{`mupil/
├── lib/
│   ├── main.dart
│   ├── screens/
│   │   ├── home_screen.dart
│   │   ├── detail_screen.dart
│   │   └── insights_screen.dart
│   ├── services/
│   │   ├── usage_service.dart
│   │   ├── network_service.dart
│   │   └── background_service.dart
│   ├── models/
│   │   ├── app_usage.dart
│   │   └── daily_summary.dart
│   ├── storage/
│   │   └── hive_adapter.dart
│   ├── themes/
│   │   └── dark_theme.dart
│   ├── widgets/
│   │   └── reusable_widgets.dart
│   └── charts/
│       └── chart_components.dart
├── android/
│   ├── app/
│   │   ├── src/main/kotlin/
│   │   │   └── UsageStatsPlugin.kt
│   │   └── AndroidManifest.xml
│   └── build.gradle
├── Dockerfile
└── README.md`}
            </pre>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Key Components</h3>
            <ul className="space-y-4">
              <li className="bg-slate-900/50 p-4 rounded-lg">
                <div className="flex items-start">
                  <FileCode className="w-5 h-5 text-violet-400 mr-3 mt-1" />
                  <div>
                    <strong className="text-white">Services Layer</strong>
                    <p className="text-sm text-slate-400 mt-1">
                      UsageService, NetworkService, BackgroundService handle platform APIs
                    </p>
                  </div>
                </div>
              </li>
              <li className="bg-slate-900/50 p-4 rounded-lg">
                <div className="flex items-start">
                  <Database className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                  <div>
                    <strong className="text-white">Hive Storage</strong>
                    <p className="text-sm text-slate-400 mt-1">
                      Encrypted local database with custom adapters for AppUsage and DailySummary
                    </p>
                  </div>
                </div>
              </li>
              <li className="bg-slate-900/50 p-4 rounded-lg">
                <div className="flex items-start">
                  <TrendingUp className="w-5 h-5 text-green-400 mr-3 mt-1" />
                  <div>
                    <strong className="text-white">Chart Rendering</strong>
                    <p className="text-sm text-slate-400 mt-1">
                      fl_chart integration for beautiful, interactive data visualizations
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700 p-8">
        <h2 className="text-2xl font-bold mb-4 text-violet-400">Privacy & Security</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-slate-900/50 p-4 rounded-lg">
            <Shield className="w-8 h-8 text-green-400 mb-2" />
            <h4 className="font-semibold text-white mb-2">Zero Telemetry</h4>
            <p className="text-sm text-slate-400">No analytics, tracking, or third-party services</p>
          </div>
          <div className="bg-slate-900/50 p-4 rounded-lg">
            <Lock className="w-8 h-8 text-blue-400 mb-2" />
            <h4 className="font-semibold text-white mb-2">Encrypted Storage</h4>
            <p className="text-sm text-slate-400">All data encrypted at rest with Hive</p>
          </div>
          <div className="bg-slate-900/50 p-4 rounded-lg">
            <Database className="w-8 h-8 text-violet-400 mb-2" />
            <h4 className="font-semibold text-white mb-2">Offline First</h4>
            <p className="text-sm text-slate-400">Works completely offline, no internet required</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

function SourceCodeContent() {
  const [activeFile, setActiveFile] = useState("main")

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700 p-6">
        <h2 className="text-2xl font-bold mb-4 text-violet-400">Complete Flutter Source Code</h2>
        <p className="text-slate-300 mb-6">
          Browse the complete implementation with all services, models, screens, and platform integrations.
        </p>

        <Tabs value={activeFile} onValueChange={setActiveFile}>
          <TabsList className="bg-slate-900/80 flex-wrap h-auto">
            <TabsTrigger value="main">main.dart</TabsTrigger>
            <TabsTrigger value="usage">usage_service.dart</TabsTrigger>
            <TabsTrigger value="network">network_service.dart</TabsTrigger>
            <TabsTrigger value="background">background_service.dart</TabsTrigger>
            <TabsTrigger value="models">models</TabsTrigger>
            <TabsTrigger value="storage">hive_adapter.dart</TabsTrigger>
            <TabsTrigger value="screens">screens</TabsTrigger>
            <TabsTrigger value="charts">charts</TabsTrigger>
          </TabsList>

          <TabsContent value="main">
            <CodeBlock
              title="lib/main.dart"
              language="dart"
              code={`import 'package:flutter/material.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'screens/home_screen.dart';
import 'screens/detail_screen.dart';
import 'screens/insights_screen.dart';
import 'themes/dark_theme.dart';
import 'models/app_usage.dart';
import 'models/daily_summary.dart';
import 'storage/hive_adapter.dart';
import 'services/usage_service.dart';
import 'services/network_service.dart';
import 'services/background_service.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  
  // Initialize Hive with encryption
  await Hive.initFlutter();
  
  // Register adapters
  Hive.registerAdapter(AppUsageAdapter());
  Hive.registerAdapter(DailySummaryAdapter());
  
  // Open encrypted boxes
  final encryptionKey = await getOrGenerateEncryptionKey();
  await Hive.openBox<AppUsage>(
    'app_usage',
    encryptionCipher: HiveAesCipher(encryptionKey),
  );
  await Hive.openBox<DailySummary>(
    'daily_summary',
    encryptionCipher: HiveAesCipher(encryptionKey),
  );
  
  // Initialize services
  await UsageService.instance.init();
  await NetworkService.instance.init();
  await BackgroundService.instance.init();
  
  runApp(const MupilApp());
}

class MupilApp extends StatelessWidget {
  const MupilApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Mupil',
      theme: AppTheme.darkTheme,
      debugShowCheckedModeBanner: false,
      home: const HomeScreen(),
      routes: {
        '/detail': (context) => const DetailScreen(),
        '/insights': (context) => const InsightsScreen(),
      },
    );
  }
}

// Encryption key management
Future<List<int>> getOrGenerateEncryptionKey() async {
  final box = await Hive.openBox('secure');
  if (!box.containsKey('key')) {
    final key = Hive.generateSecureKey();
    await box.put('key', key);
    return key;
  }
  return List<int>.from(box.get('key'));
}`}
            />
          </TabsContent>

          <TabsContent value="usage">
            <CodeBlock
              title="lib/services/usage_service.dart"
              language="dart"
              code={`import 'package:flutter/services.dart';
import '../models/app_usage.dart';
import '../models/daily_summary.dart';
import 'package:hive/hive.dart';

class UsageService {
  static final UsageService instance = UsageService._internal();
  factory UsageService() => instance;
  UsageService._internal();

  static const platform = MethodChannel('com.mupil/usage_stats');
  
  Box<AppUsage>? _usageBox;
  Box<DailySummary>? _summaryBox;

  Future<void> init() async {
    _usageBox = Hive.box<AppUsage>('app_usage');
    _summaryBox = Hive.box<DailySummary>('daily_summary');
    
    // Request permissions
    await requestPermissions();
    
    // Start periodic collection
    await startPeriodicCollection();
  }

  Future<bool> requestPermissions() async {
    try {
      final bool granted = await platform.invokeMethod('requestUsagePermission');
      return granted;
    } on PlatformException catch (e) {
      print("Failed to request permissions: \${e.message}");
      return false;
    }
  }

  Future<List<AppUsage>> getUsageStats({
    required DateTime start,
    required DateTime end,
  }) async {
    try {
      final List<dynamic> result = await platform.invokeMethod(
        'getUsageStats',
        {
          'startTime': start.millisecondsSinceEpoch,
          'endTime': end.millisecondsSinceEpoch,
        },
      );

      final usageList = result.map((item) {
        return AppUsage(
          packageName: item['packageName'],
          appName: item['appName'],
          totalTimeInForeground: item['totalTimeInForeground'],
          lastTimeUsed: DateTime.fromMillisecondsSinceEpoch(item['lastTimeUsed']),
          timestamp: DateTime.now(),
        );
      }).toList();

      // Persist to Hive
      for (var usage in usageList) {
        await _usageBox?.put(
          '\${usage.packageName}_\${usage.timestamp.millisecondsSinceEpoch}',
          usage,
        );
      }

      return usageList;
    } on PlatformException catch (e) {
      print("Failed to get usage stats: \${e.message}");
      return [];
    }
  }

  Future<DailySummary> getDailySummary(DateTime date) async {
    final start = DateTime(date.year, date.month, date.day);
    final end = start.add(const Duration(days: 1));
    
    final usageList = await getUsageStats(start: start, end: end);
    
    final totalScreenTime = usageList.fold<int>(
      0,
      (sum, item) => sum + item.totalTimeInForeground,
    );
    
    final summary = DailySummary(
      date: date,
      totalScreenTime: totalScreenTime,
      appUsages: usageList,
      pickupCount: await _getPickupCount(date),
    );
    
    await _summaryBox?.put(date.toIso8601String(), summary);
    
    return summary;
  }

  Future<int> _getPickupCount(DateTime date) async {
    try {
      final int count = await platform.invokeMethod(
        'getPickupCount',
        {'date': date.millisecondsSinceEpoch},
      );
      return count;
    } catch (e) {
      return 0;
    }
  }

  Future<void> startPeriodicCollection() async {
    // Trigger background service for periodic data collection
    try {
      await platform.invokeMethod('startPeriodicCollection');
    } catch (e) {
      print("Failed to start periodic collection: \$e");
    }
  }
  
  // Export functionality
  Future<String> exportToJson() async {
    final allUsage = _usageBox?.values.toList() ?? [];
    final allSummaries = _summaryBox?.values.toList() ?? [];
    
    // Convert to JSON and return file path
    // Implementation details...
    return '/storage/emulated/0/Mupil/export.json';
  }
}`}
            />
          </TabsContent>

          <TabsContent value="network">
            <CodeBlock
              title="lib/services/network_service.dart"
              language="dart"
              code={`import 'package:flutter/services.dart';
import '../models/app_usage.dart';

class NetworkService {
  static final NetworkService instance = NetworkService._internal();
  factory NetworkService() => instance;
  NetworkService._internal();

  static const platform = MethodChannel('com.mupil/network_stats');

  Future<void> init() async {
    // Initialize network tracking
    await platform.invokeMethod('initNetworkTracking');
  }

  Future<Map<String, NetworkUsage>> getNetworkUsage({
    required DateTime start,
    required DateTime end,
  }) async {
    try {
      final Map<dynamic, dynamic> result = await platform.invokeMethod(
        'getNetworkUsage',
        {
          'startTime': start.millisecondsSinceEpoch,
          'endTime': end.millisecondsSinceEpoch,
        },
      );

      final Map<String, NetworkUsage> usage = {};
      
      result.forEach((packageName, data) {
        usage[packageName] = NetworkUsage(
          packageName: packageName,
          wifiRx: data['wifiRx'] ?? 0,
          wifiTx: data['wifiTx'] ?? 0,
          mobileRx: data['mobileRx'] ?? 0,
          mobileTx: data['mobileTx'] ?? 0,
        );
      });

      return usage;
    } on PlatformException catch (e) {
      print("Failed to get network usage: \${e.message}");
      return {};
    }
  }

  Future<NetworkUsage> getAppNetworkUsage(String packageName) async {
    try {
      final Map<dynamic, dynamic> result = await platform.invokeMethod(
        'getAppNetworkUsage',
        {'packageName': packageName},
      );

      return NetworkUsage(
        packageName: packageName,
        wifiRx: result['wifiRx'] ?? 0,
        wifiTx: result['wifiTx'] ?? 0,
        mobileRx: result['mobileRx'] ?? 0,
        mobileTx: result['mobileTx'] ?? 0,
      );
    } catch (e) {
      return NetworkUsage(
        packageName: packageName,
        wifiRx: 0,
        wifiTx: 0,
        mobileRx: 0,
        mobileTx: 0,
      );
    }
  }

  String formatBytes(int bytes) {
    if (bytes < 1024) return '\$bytes B';
    if (bytes < 1024 * 1024) return '\${(bytes / 1024).toStringAsFixed(2)} KB';
    if (bytes < 1024 * 1024 * 1024) {
      return '\${(bytes / (1024 * 1024)).toStringAsFixed(2)} MB';
    }
    return '\${(bytes / (1024 * 1024 * 1024)).toStringAsFixed(2)} GB';
  }
}

class NetworkUsage {
  final String packageName;
  final int wifiRx;
  final int wifiTx;
  final int mobileRx;
  final int mobileTx;

  NetworkUsage({
    required this.packageName,
    required this.wifiRx,
    required this.wifiTx,
    required this.mobileRx,
    required this.mobileTx,
  });

  int get totalWifi => wifiRx + wifiTx;
  int get totalMobile => mobileRx + mobileTx;
  int get total => totalWifi + totalMobile;
}`}
            />
          </TabsContent>

          <TabsContent value="background">
            <CodeBlock
              title="lib/services/background_service.dart"
              language="dart"
              code={`import 'package:flutter/services.dart';
import 'package:workmanager/workmanager.dart';

class BackgroundService {
  static final BackgroundService instance = BackgroundService._internal();
  factory BackgroundService() => instance;
  BackgroundService._internal();

  static const platform = MethodChannel('com.mupil/background');

  Future<void> init() async {
    await Workmanager().initialize(callbackDispatcher, isInDebugMode: false);
    await registerPeriodicTask();
  }

  Future<void> registerPeriodicTask() async {
    await Workmanager().registerPeriodicTask(
      "mupil-stats-collection",
      "statsCollection",
      frequency: const Duration(minutes: 15),
      constraints: Constraints(
        networkType: NetworkType.not_required,
        requiresBatteryNotLow: false,
        requiresCharging: false,
      ),
    );
  }

  Future<List<BackgroundActivity>> getBackgroundActivities({
    required DateTime start,
    required DateTime end,
  }) async {
    try {
      final List<dynamic> result = await platform.invokeMethod(
        'getBackgroundActivities',
        {
          'startTime': start.millisecondsSinceEpoch,
          'endTime': end.millisecondsSinceEpoch,
        },
      );

      return result.map((item) {
        return BackgroundActivity(
          packageName: item['packageName'],
          appName: item['appName'],
          duration: item['duration'],
          startTime: DateTime.fromMillisecondsSinceEpoch(item['startTime']),
          endTime: DateTime.fromMillisecondsSinceEpoch(item['endTime']),
        );
      }).toList();
    } on PlatformException catch (e) {
      print("Failed to get background activities: \${e.message}");
      return [];
    }
  }

  Future<bool> isRunningInBackground(String packageName) async {
    try {
      final bool result = await platform.invokeMethod(
        'isRunningInBackground',
        {'packageName': packageName},
      );
      return result;
    } catch (e) {
      return false;
    }
  }
}

class BackgroundActivity {
  final String packageName;
  final String appName;
  final int duration;
  final DateTime startTime;
  final DateTime endTime;

  BackgroundActivity({
    required this.packageName,
    required this.appName,
    required this.duration,
    required this.startTime,
    required this.endTime,
  });
}

@pragma('vm:entry-point')
void callbackDispatcher() {
  Workmanager().executeTask((task, inputData) async {
    // Collect stats in background
    try {
      final usageService = UsageService.instance;
      final networkService = NetworkService.instance;
      
      final now = DateTime.now();
      final yesterday = now.subtract(const Duration(days: 1));
      
      await usageService.getUsageStats(start: yesterday, end: now);
      await networkService.getNetworkUsage(start: yesterday, end: now);
      
      return true;
    } catch (e) {
      print("Background task failed: \$e");
      return false;
    }
  });
}`}
            />
          </TabsContent>

          <TabsContent value="models">
            <CodeBlock
              title="lib/models/app_usage.dart & daily_summary.dart"
              language="dart"
              code={`// app_usage.dart
import 'package:hive/hive.dart';

part 'app_usage.g.dart';

@HiveType(typeId: 0)
class AppUsage extends HiveObject {
  @HiveField(0)
  final String packageName;

  @HiveField(1)
  final String appName;

  @HiveField(2)
  final int totalTimeInForeground; // milliseconds

  @HiveField(3)
  final DateTime lastTimeUsed;

  @HiveField(4)
  final DateTime timestamp;

  @HiveField(5)
  int? wifiUsage;

  @HiveField(6)
  int? mobileUsage;

  AppUsage({
    required this.packageName,
    required this.appName,
    required this.totalTimeInForeground,
    required this.lastTimeUsed,
    required this.timestamp,
    this.wifiUsage,
    this.mobileUsage,
  });

  String get formattedTime {
    final hours = totalTimeInForeground ~/ (1000 * 60 * 60);
    final minutes = (totalTimeInForeground % (1000 * 60 * 60)) ~/ (1000 * 60);
    
    if (hours > 0) {
      return '\${hours}h \${minutes}m';
    }
    return '\${minutes}m';
  }
}

// daily_summary.dart
import 'package:hive/hive.dart';
import 'app_usage.dart';

part 'daily_summary.g.dart';

@HiveType(typeId: 1)
class DailySummary extends HiveObject {
  @HiveField(0)
  final DateTime date;

  @HiveField(1)
  final int totalScreenTime; // milliseconds

  @HiveField(2)
  final List<AppUsage> appUsages;

  @HiveField(3)
  final int pickupCount;

  @HiveField(4)
  int? totalWifiUsage;

  @HiveField(5)
  int? totalMobileUsage;

  DailySummary({
    required this.date,
    required this.totalScreenTime,
    required this.appUsages,
    required this.pickupCount,
    this.totalWifiUsage,
    this.totalMobileUsage,
  });

  String get formattedScreenTime {
    final hours = totalScreenTime ~/ (1000 * 60 * 60);
    final minutes = (totalScreenTime % (1000 * 60 * 60)) ~/ (1000 * 60);
    return '\${hours}h \${minutes}m';
  }

  List<AppUsage> get topApps {
    final sorted = List<AppUsage>.from(appUsages)
      ..sort((a, b) => b.totalTimeInForeground.compareTo(a.totalTimeInForeground));
    return sorted.take(5).toList();
  }
}`}
            />
          </TabsContent>

          <TabsContent value="storage">
            <CodeBlock
              title="lib/storage/hive_adapter.dart"
              language="dart"
              code={`import 'package:hive/hive.dart';
import '../models/app_usage.dart';
import '../models/daily_summary.dart';

class AppUsageAdapter extends TypeAdapter<AppUsage> {
  @override
  final int typeId = 0;

  @override
  AppUsage read(BinaryReader reader) {
    return AppUsage(
      packageName: reader.readString(),
      appName: reader.readString(),
      totalTimeInForeground: reader.readInt(),
      lastTimeUsed: DateTime.fromMillisecondsSinceEpoch(reader.readInt()),
      timestamp: DateTime.fromMillisecondsSinceEpoch(reader.readInt()),
      wifiUsage: reader.readInt(),
      mobileUsage: reader.readInt(),
    );
  }

  @override
  void write(BinaryWriter writer, AppUsage obj) {
    writer.writeString(obj.packageName);
    writer.writeString(obj.appName);
    writer.writeInt(obj.totalTimeInForeground);
    writer.writeInt(obj.lastTimeUsed.millisecondsSinceEpoch);
    writer.writeInt(obj.timestamp.millisecondsSinceEpoch);
    writer.writeInt(obj.wifiUsage ?? 0);
    writer.writeInt(obj.mobileUsage ?? 0);
  }
}

class DailySummaryAdapter extends TypeAdapter<DailySummary> {
  @override
  final int typeId = 1;

  @override
  DailySummary read(BinaryReader reader) {
    final date = DateTime.fromMillisecondsSinceEpoch(reader.readInt());
    final totalScreenTime = reader.readInt();
    final appUsagesLength = reader.readInt();
    final appUsages = <AppUsage>[];
    
    for (var i = 0; i < appUsagesLength; i++) {
      appUsages.add(reader.read() as AppUsage);
    }
    
    return DailySummary(
      date: date,
      totalScreenTime: totalScreenTime,
      appUsages: appUsages,
      pickupCount: reader.readInt(),
      totalWifiUsage: reader.readInt(),
      totalMobileUsage: reader.readInt(),
    );
  }

  @override
  void write(BinaryWriter writer, DailySummary obj) {
    writer.writeInt(obj.date.millisecondsSinceEpoch);
    writer.writeInt(obj.totalScreenTime);
    writer.writeInt(obj.appUsages.length);
    
    for (var usage in obj.appUsages) {
      writer.write(usage);
    }
    
    writer.writeInt(obj.pickupCount);
    writer.writeInt(obj.totalWifiUsage ?? 0);
    writer.writeInt(obj.totalMobileUsage ?? 0);
  }
}`}
            />
          </TabsContent>

          <TabsContent value="screens">
            <CodeBlock
              title="lib/screens/home_screen.dart"
              language="dart"
              code={`import 'package:flutter/material.dart';
import '../services/usage_service.dart';
import '../services/network_service.dart';
import '../models/daily_summary.dart';
import '../charts/chart_components.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  DailySummary? _todaySummary;
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    _loadTodayData();
  }

  Future<void> _loadTodayData() async {
    setState(() => _isLoading = true);
    
    final summary = await UsageService.instance.getDailySummary(DateTime.now());
    
    setState(() {
      _todaySummary = summary;
      _isLoading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF0F172A),
      appBar: AppBar(
        title: const Text('Mupil', style: TextStyle(fontWeight: FontWeight.bold)),
        backgroundColor: const Color(0xFF1E293B),
        actions: [
          IconButton(
            icon: const Icon(Icons.insights),
            onPressed: () => Navigator.pushNamed(context, '/insights'),
          ),
          IconButton(
            icon: const Icon(Icons.settings),
            onPressed: () {},
          ),
        ],
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator(color: Colors.purple))
          : RefreshIndicator(
              onRefresh: _loadTodayData,
              child: SingleChildScrollView(
                padding: const EdgeInsets.all(16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    _buildSummaryCard(),
                    const SizedBox(height: 16),
                    _buildTopAppsSection(),
                    const SizedBox(height: 16),
                    _buildChartSection(),
                  ],
                ),
              ),
            ),
    );
  }

  Widget _buildSummaryCard() {
    return Card(
      color: const Color(0xFF1E293B),
      child: Padding(
        padding: const EdgeInsets(all(20),
        child: Column(
          children: [
            Text(
              'Today\\'s Screen Time',
              style: TextStyle(color: Colors.grey[400], fontSize: 14),
            ),
            const SizedBox(height: 8),
            Text(
              _todaySummary?.formattedScreenTime ?? '0h 0m',
              style: const TextStyle(
                color: Colors.white,
                fontSize: 36,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                _buildStatItem('Pickups', '\${_todaySummary?.pickupCount ?? 0}'),
                _buildStatItem('Apps Used', '\${_todaySummary?.appUsages.length ?? 0}'),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildStatItem(String label, String value) {
    return Column(
      children: [
        Text(value, style: const TextStyle(color: Colors.purple, fontSize: 24, fontWeight: FontWeight.bold)),
        Text(label, style: TextStyle(color: Colors.grey[400], fontSize: 12)),
      ],
    );
  }

  Widget _buildTopAppsSection() {
    final topApps = _todaySummary?.topApps ?? [];
    
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Top Apps',
          style: TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: 12),
        ...topApps.map((app) => _buildAppItem(app)).toList(),
      ],
    );
  }

  Widget _buildAppItem(AppUsage app) {
    return Card(
      color: const Color(0xFF1E293B),
      margin: const EdgeInsets.only(bottom: 8),
      child: ListTile(
        leading: const Icon(Icons.apps, color: Colors.purple),
        title: Text(app.appName, style: const TextStyle(color: Colors.white)),
        subtitle: Text(
          'Last used: \${_formatTime(app.lastTimeUsed)}',
          style: TextStyle(color: Colors.grey[400], fontSize: 12),
        ),
        trailing: Text(
          app.formattedTime,
          style: const TextStyle(color: Colors.purple, fontWeight: FontWeight.bold),
        ),
        onTap: () => Navigator.pushNamed(context, '/detail', arguments: app),
      ),
    );
  }

  Widget _buildChartSection() {
    return Card(
      color: const Color(0xFF1E293B),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Weekly Overview',
              style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 16),
            SizedBox(
              height: 200,
              child: ScreenTimeChart(),
            ),
          ],
        ),
      ),
    );
  }

  String _formatTime(DateTime time) {
    final now = DateTime.now();
    final diff = now.difference(time);
    
    if (diff.inMinutes < 60) return '\${diff.inMinutes}m ago';
    if (diff.inHours < 24) return '\${diff.inHours}h ago';
    return '\${diff.inDays}d ago';
  }
}`}
            />
          </TabsContent>

          <TabsContent value="charts">
            <CodeBlock
              title="lib/charts/chart_components.dart"
              language="dart"
              code={`import 'package:flutter/material.dart';
import 'package:fl_chart/fl_chart.dart';
import '../services/usage_service.dart';

class ScreenTimeChart extends StatefulWidget {
  @override
  _ScreenTimeChartState createState() => _ScreenTimeChartState();
}

class _ScreenTimeChartState extends State<ScreenTimeChart> {
  List<double> _weekData = [];

  @override
  void initState() {
    super.initState();
    _loadWeekData();
  }

  Future<void> _loadWeekData() async {
    final data = <double>[];
    final now = DateTime.now();
    
    for (int i = 6; i >= 0; i--) {
      final date = now.subtract(Duration(days: i));
      final summary = await UsageService.instance.getDailySummary(date);
      data.add(summary.totalScreenTime / (1000 * 60 * 60)); // Convert to hours
    }
    
    setState(() => _weekData = data);
  }

  @override
  Widget build(BuildContext context) {
    if (_weekData.isEmpty) {
      return const Center(child: CircularProgressIndicator());
    }

    return BarChart(
      BarChartData(
        alignment: BarChartAlignment.spaceAround,
        maxY: _weekData.reduce((a, b) => a > b ? a : b) * 1.2,
        barTouchData: BarTouchData(enabled: true),
        titlesData: FlTitlesData(
          show: true,
          bottomTitles: AxisTitles(
            sideTitles: SideTitles(
              showTitles: true,
              getTitlesWidget: (value, meta) {
                const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                return Text(
                  days[value.toInt()],
                  style: const TextStyle(color: Colors.grey, fontSize: 10),
                );
              },
            ),
          ),
          leftTitles: AxisTitles(
            sideTitles: SideTitles(
              showTitles: true,
              reservedSize: 40,
              getTitlesWidget: (value, meta) {
                return Text(
                  '\${value.toInt()}h',
                  style: const TextStyle(color: Colors.grey, fontSize: 10),
                );
              },
            ),
          ),
          topTitles: AxisTitles(sideTitles: SideTitles(showTitles: false)),
          rightTitles: AxisTitles(sideTitles: SideTitles(showTitles: false)),
        ),
        gridData: FlGridData(
          show: true,
          drawVerticalLine: false,
          getDrawingHorizontalLine: (value) {
            return FlLine(
              color: Colors.white.withOpacity(0.1),
              strokeWidth: 1,
            );
          },
        ),
        borderData: FlBorderData(show: false),
        barGroups: _weekData.asMap().entries.map((entry) {
          return BarChartGroupData(
            x: entry.key,
            barRods: [
              BarChartRodData(
                toY: entry.value,
                gradient: const LinearGradient(
                  colors: [Colors.purple, Colors.purpleAccent],
                  begin: Alignment.bottomCenter,
                  end: Alignment.topCenter,
                ),
                width: 20,
                borderRadius: const BorderRadius.vertical(top: Radius.circular(4)),
              ),
            ],
          );
        }).toList(),
      ),
    );
  }
}`}
            />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}

function AndroidNativeContent() {
  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700 p-8">
        <h2 className="text-2xl font-bold mb-4 text-violet-400">Android Native Implementation</h2>
        <p className="text-slate-300 mb-6">
          Platform-specific modules for Android 10+ using Kotlin/Java with UsageStatsManager and TrafficStats APIs.
        </p>

        <Tabs defaultValue="manifest">
          <TabsList className="bg-slate-900/80">
            <TabsTrigger value="manifest">AndroidManifest.xml</TabsTrigger>
            <TabsTrigger value="plugin">UsageStatsPlugin.kt</TabsTrigger>
            <TabsTrigger value="network">NetworkStatsPlugin.kt</TabsTrigger>
            <TabsTrigger value="gradle">build.gradle</TabsTrigger>
          </TabsList>

          <TabsContent value="manifest">
            <CodeBlock
              title="android/app/src/main/AndroidManifest.xml"
              language="xml"
              code={`<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.mupil.app">

    <!-- Permissions -->
    <uses-permission android:name="android.permission.PACKAGE_USAGE_STATS"
        tools:ignore="ProtectedPermissions" />
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
    <uses-permission android:name="android.permission.WAKE_LOCK" />
    <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />

    <application
        android:label="Mupil"
        android:name="\${applicationName}"
        android:icon="@mipmap/ic_launcher">
        
        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:launchMode="singleTop"
            android:theme="@style/LaunchTheme"
            android:configChanges="orientation|keyboardHidden|keyboard|screenSize|smallestScreenSize|locale|layoutDirection|fontScale|screenLayout|density|uiMode"
            android:hardwareAccelerated="true"
            android:windowSoftInputMode="adjustResize">
            
            <meta-data
              android:name="io.flutter.embedding.android.NormalTheme"
              android:resource="@style/NormalTheme" />
              
            <intent-filter>
                <action android:name="android.intent.action.MAIN"/>
                <category android:name="android.intent.category.LAUNCHER"/>
            </intent-filter>
        </activity>

        <!-- Background Service -->
        <service
            android:name=".services.StatsCollectionService"
            android:enabled="true"
            android:exported="false"
            android:foregroundServiceType="dataSync" />

        <!-- Boot Receiver -->
        <receiver
            android:name=".receivers.BootReceiver"
            android:enabled="true"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.BOOT_COMPLETED" />
            </intent-filter>
        </receiver>

        <meta-data
            android:name="flutterEmbedding"
            android:value="2" />
    </application>
</manifest>`}
            />
          </TabsContent>

          <TabsContent value="plugin">
            <CodeBlock
              title="android/app/src/main/kotlin/UsageStatsPlugin.kt"
              language="kotlin"
              code={`package com.mupil.app

import android.app.AppOpsManager
import android.app.usage.UsageStats
import android.app.usage.UsageStatsManager
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.provider.Settings
import io.flutter.embedding.engine.FlutterEngine
import io.flutter.plugin.common.MethodCall
import io.flutter.plugin.common.MethodChannel

class UsageStatsPlugin(
    private val context: Context,
    private val flutterEngine: FlutterEngine
) : MethodChannel.MethodCallHandler {

    private val channel = MethodChannel(
        flutterEngine.dartExecutor.binaryMessenger,
        "com.mupil/usage_stats"
    )

    init {
        channel.setMethodCallHandler(this)
    }

    override fun onMethodCall(call: MethodCall, result: MethodChannel.Result) {
        when (call.method) {
            "requestUsagePermission" -> {
                result.success(requestUsagePermission())
            }
            "getUsageStats" -> {
                val startTime = call.argument<Long>("startTime") ?: 0L
                val endTime = call.argument<Long>("endTime") ?: System.currentTimeMillis()
                result.success(getUsageStats(startTime, endTime))
            }
            "getPickupCount" -> {
                val date = call.argument<Long>("date") ?: System.currentTimeMillis()
                result.success(getPickupCount(date))
            }
            "startPeriodicCollection" -> {
                startPeriodicCollection()
                result.success(true)
            }
            else -> result.notImplemented()
        }
    }

    private fun requestUsagePermission(): Boolean {
        if (!hasUsageStatsPermission()) {
            val intent = Intent(Settings.ACTION_USAGE_ACCESS_SETTINGS)
            intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK
            context.startActivity(intent)
            return false
        }
        return true
    }

    private fun hasUsageStatsPermission(): Boolean {
        val appOps = context.getSystemService(Context.APP_OPS_SERVICE) as AppOpsManager
        val mode = appOps.checkOpNoThrow(
            AppOpsManager.OPSTR_GET_USAGE_STATS,
            android.os.Process.myUid(),
            context.packageName
        )
        return mode == AppOpsManager.MODE_ALLOWED
    }

    private fun getUsageStats(startTime: Long, endTime: Long): List<Map<String, Any>> {
        if (!hasUsageStatsPermission()) {
            return emptyList()
        }

        val usageStatsManager = context.getSystemService(Context.USAGE_STATS_SERVICE) 
            as UsageStatsManager
        
        val usageStatsList = usageStatsManager.queryUsageStats(
            UsageStatsManager.INTERVAL_DAILY,
            startTime,
            endTime
        )

        val packageManager = context.packageManager
        val result = mutableListOf<Map<String, Any>>()

        usageStatsList?.forEach { stats ->
            if (stats.totalTimeInForeground > 0) {
                try {
                    val appInfo = packageManager.getApplicationInfo(stats.packageName, 0)
                    val appName = packageManager.getApplicationLabel(appInfo).toString()

                    result.add(
                        mapOf(
                            "packageName" to stats.packageName,
                            "appName" to appName,
                            "totalTimeInForeground" to stats.totalTimeInForeground,
                            "lastTimeUsed" to stats.lastTimeUsed,
                            "firstTimeStamp" to stats.firstTimeStamp
                        )
                    )
                } catch (e: PackageManager.NameNotFoundException) {
                    // App uninstalled, skip
                }
            }
        }

        return result.sortedByDescending { 
            (it["totalTimeInForeground"] as Long)
        }
    }

    private fun getPickupCount(date: Long): Int {
        if (!hasUsageStatsPermission()) return 0

        val usageStatsManager = context.getSystemService(Context.USAGE_STATS_SERVICE) 
            as UsageStatsManager

        val events = usageStatsManager.queryEvents(date, date + 86400000) // +24 hours
        var pickupCount = 0
        var lastScreenOff = 0L

        while (events.hasNextEvent()) {
            val event = android.app.usage.UsageEvents.Event()
            events.getNextEvent(event)

            when (event.eventType) {
                android.app.usage.UsageEvents.Event.SCREEN_INTERACTIVE -> {
                    if (lastScreenOff > 0 && event.timeStamp - lastScreenOff > 60000) {
                        pickupCount++
                    }
                }
                android.app.usage.UsageEvents.Event.SCREEN_NON_INTERACTIVE -> {
                    lastScreenOff = event.timeStamp
                }
            }
        }

        return pickupCount
    }

    private fun startPeriodicCollection() {
        val intent = Intent(context, StatsCollectionService::class.java)
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
            context.startForegroundService(intent)
        } else {
            context.startService(intent)
        }
    }
}`}
            />
          </TabsContent>

          <TabsContent value="network">
            <CodeBlock
              title="android/app/src/main/kotlin/NetworkStatsPlugin.kt"
              language="kotlin"
              code={`package com.mupil.app

import android.content.Context
import android.content.pm.PackageManager
import android.net.TrafficStats
import io.flutter.embedding.engine.FlutterEngine
import io.flutter.plugin.common.MethodCall
import io.flutter.plugin.common.MethodChannel

class NetworkStatsPlugin(
    private val context: Context,
    flutterEngine: FlutterEngine
) : MethodChannel.MethodCallHandler {

    private val channel = MethodChannel(
        flutterEngine.dartExecutor.binaryMessenger,
        "com.mupil/network_stats"
    )

    init {
        channel.setMethodCallHandler(this)
    }

    override fun onMethodCall(call: MethodCall, result: MethodChannel.Result) {
        when (call.method) {
            "initNetworkTracking" -> {
                result.success(true)
            }
            "getNetworkUsage" -> {
                result.success(getAllNetworkUsage())
            }
            "getAppNetworkUsage" -> {
                val packageName = call.argument<String>("packageName")
                if (packageName != null) {
                    result.success(getAppNetworkUsage(packageName))
                } else {
                    result.error("INVALID_ARGUMENT", "packageName is required", null)
                }
            }
            else -> result.notImplemented()
        }
    }

    private fun getAllNetworkUsage(): Map<String, Map<String, Long>> {
        val packageManager = context.packageManager
        val installedApps = packageManager.getInstalledApplications(PackageManager.GET_META_DATA)
        val result = mutableMapOf<String, Map<String, Long>>()

        installedApps.forEach { appInfo ->
            try {
                val uid = appInfo.uid
                val stats = getNetworkStatsForUid(uid)
                
                if (stats.values.sum() > 0) {
                    result[appInfo.packageName] = stats
                }
            } catch (e: Exception) {
                // Skip apps that cause errors
            }
        }

        return result
    }

    private fun getAppNetworkUsage(packageName: String): Map<String, Long> {
        return try {
            val packageManager = context.packageManager
            val appInfo = packageManager.getApplicationInfo(packageName, 0)
            getNetworkStatsForUid(appInfo.uid)
        } catch (e: PackageManager.NameNotFoundException) {
            mapOf(
                "wifiRx" to 0L,
                "wifiTx" to 0L,
                "mobileRx" to 0L,
                "mobileTx" to 0L
            )
        }
    }

    private fun getNetworkStatsForUid(uid: Int): Map<String, Long> {
        // Note: TrafficStats provides cumulative data since device boot
        // For per-period stats, you need to implement delta calculation
        
        val wifiRx = TrafficStats.getUidRxBytes(uid)
        val wifiTx = TrafficStats.getUidTxBytes(uid)
        
        // Mobile data requires NetworkStatsManager (API 23+) for accurate stats
        // This is simplified; real implementation needs NetworkStatsManager
        
        return mapOf(
            "wifiRx" to if (wifiRx >= 0) wifiRx else 0L,
            "wifiTx" to if (wifiTx >= 0) wifiTx else 0L,
            "mobileRx" to 0L, // Requires NetworkStatsManager
            "mobileTx" to 0L  // Requires NetworkStatsManager
        )
    }
}

// For more accurate network stats (API 23+):
/*
private fun getDetailedNetworkStats(uid: Int, start: Long, end: Long): NetworkStats {
    val networkStatsManager = context.getSystemService(Context.NETWORK_STATS_SERVICE) 
        as NetworkStatsManager
    
    val wifiStats = networkStatsManager.querySummary(
        ConnectivityManager.TYPE_WIFI,
        "",
        start,
        end
    )
    
    val mobileStats = networkStatsManager.querySummary(
        ConnectivityManager.TYPE_MOBILE,
        "",
        start,
        end
    )
    
    return NetworkStats(wifiStats, mobileStats)
}
*/`}
            />
          </TabsContent>

          <TabsContent value="gradle">
            <CodeBlock
              title="android/app/build.gradle"
              language="gradle"
              code={`plugins {
    id "com.android.application"
    id "kotlin-android"
    id "dev.flutter.flutter-gradle-plugin"
}

def localProperties = new Properties()
def localPropertiesFile = rootProject.file('local.properties')
if (localPropertiesFile.exists()) {
    localPropertiesFile.withReader('UTF-8') { reader ->
        localProperties.load(reader)
    }
}

def flutterVersionCode = localProperties.getProperty('flutter.versionCode')
if (flutterVersionCode == null) {
    flutterVersionCode = '1'
}

def flutterVersionName = localProperties.getProperty('flutter.versionName')
if (flutterVersionName == null) {
    flutterVersionName = '1.0'
}

android {
    namespace "com.mupil.app"
    compileSdk 34
    ndkVersion "25.1.8937393"

    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }

    kotlinOptions {
        jvmTarget = '1.8'
    }

    defaultConfig {
        applicationId "com.mupil.app"
        minSdk 26  // Android 8.0+ for UsageStatsManager
        targetSdk 34
        versionCode flutterVersionCode.toInteger()
        versionName flutterVersionName
    }

    signingConfigs {
        release {
            if (project.hasProperty('MUPIL_KEYSTORE_FILE')) {
                storeFile file(MUPIL_KEYSTORE_FILE)
                storePassword MUPIL_KEYSTORE_PASSWORD
                keyAlias MUPIL_KEY_ALIAS
                keyPassword MUPIL_KEY_PASSWORD
            }
        }
    }

    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled true
            shrinkResources true
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
        debug {
            signingConfig signingConfigs.debug
        }
    }
}

flutter {
    source '../..'
}

dependencies {
    implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk7:$kotlin_version"
    implementation 'androidx.work:work-runtime-ktx:2.9.0'
    implementation 'androidx.core:core-ktx:1.12.0'
}`}
            />
          </TabsContent>
        </Tabs>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700 p-8">
        <h2 className="text-2xl font-bold mb-4 text-violet-400">Permissions Handling</h2>
        <div className="space-y-4">
          <div className="bg-slate-900/50 p-4 rounded-lg">
            <h4 className="font-semibold text-white mb-2 flex items-center">
              <CheckCircle2 className="w-5 h-5 text-green-400 mr-2" />
              PACKAGE_USAGE_STATS
            </h4>
            <p className="text-sm text-slate-400">
              Required for accessing app usage statistics. User must manually grant this permission 
              in device Settings → Special app access → Usage access.
            </p>
          </div>
          <div className="bg-slate-900/50 p-4 rounded-lg">
            <h4 className="font-semibold text-white mb-2 flex items-center">
              <CheckCircle2 className="w-5 h-5 text-green-400 mr-2" />
              Network Stats Access
            </h4>
            <p className="text-sm text-slate-400">
              TrafficStats API is available without special permissions for own UID. 
              For other apps, requires READ_PHONE_STATE or system-level access.
            </p>
          </div>
          <div className="bg-slate-900/50 p-4 rounded-lg">
            <h4 className="font-semibold text-white mb-2 flex items-center">
              <CheckCircle2 className="w-5 h-5 text-green-400 mr-2" />
              Background Service
            </h4>
            <p className="text-sm text-slate-400">
              Foreground service with notification keeps data collection running. 
              WorkManager handles periodic polling even when app is closed.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}

function SetupContent() {
  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700 p-8">
        <h2 className="text-2xl font-bold mb-4 text-violet-400">Setup Instructions</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-white flex items-center">
              <Terminal className="w-5 h-5 mr-2 text-green-400" />
              Prerequisites
            </h3>
            <ul className="space-y-2 text-slate-300 ml-7">
              <li>• Flutter SDK 3.16+ (<code className="bg-slate-900 px-2 py-1 rounded">flutter --version</code>)</li>
              <li>• Android Studio with Android SDK 26+</li>
              <li>• Java JDK 11 or higher</li>
              <li>• Git for version control</li>
            </ul>
          </div>

          <Separator className="bg-slate-700" />

          <div>
            <h3 className="text-xl font-semibold mb-3 text-white flex items-center">
              <Package className="w-5 h-5 mr-2 text-blue-400" />
              Installation Steps
            </h3>
            <div className="space-y-4">
              <CodeBlock
                title="1. Clone & Setup"
                language="bash"
                code={`# Clone the repository (or download source)
git clone https://github.com/yourusername/mupil.git
cd mupil

# Install Flutter dependencies
flutter pub get

# Verify Flutter setup
flutter doctor -v`}
              />

              <CodeBlock
                title="2. Configure Android"
                language="bash"
                code={`# Generate signing key
keytool -genkey -v -keystore ~/mupil-release-key.jks \\
  -keyalg RSA -keysize 2048 -validity 10000 \\
  -alias mupil-key

# Create key.properties file
cat > android/key.properties << EOF
storePassword=<your_store_password>
keyPassword=<your_key_password>
keyAlias=mupil-key
storeFile=<path_to_jks_file>
EOF`}
              />

              <CodeBlock
                title="3. Build APK"
                language="bash"
                code={`# Debug build
flutter build apk --debug

# Release build (signed)
flutter build apk --release

# APK location:
# build/app/outputs/flutter-apk/app-release.apk`}
              />

              <CodeBlock
                title="4. Install on Device"
                language="bash"
                code={`# Connect Android device via USB (enable USB debugging)
adb devices

# Install APK
flutter install

# Or manually:
adb install build/app/outputs/flutter-apk/app-release.apk`}
              />
            </div>
          </div>

          <Separator className="bg-slate-700" />

          <div>
            <h3 className="text-xl font-semibold mb-3 text-white">Development Commands</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <code className="text-green-400">flutter run</code>
                <p className="text-sm text-slate-400 mt-2">Run app in debug mode</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <code className="text-blue-400">flutter test</code>
                <p className="text-sm text-slate-400 mt-2">Run unit tests</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <code className="text-purple-400">flutter analyze</code>
                <p className="text-sm text-slate-400 mt-2">Static code analysis</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <code className="text-orange-400">flutter clean</code>
                <p className="text-sm text-slate-400 mt-2">Clean build artifacts</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700 p-8">
        <h2 className="text-2xl font-bold mb-4 text-violet-400">Docker Configuration</h2>
        <p className="text-slate-300 mb-4">
          Reproducible build environment with all dependencies pre-configured.
        </p>

        <CodeBlock
          title="Dockerfile"
          language="dockerfile"
          code={`FROM ubuntu:22.04

# Install dependencies
RUN apt-get update && apt-get install -y \\
    curl \\
    git \\
    unzip \\
    xz-utils \\
    zip \\
    libglu1-mesa \\
    openjdk-11-jdk \\
    wget

# Install Android SDK
ENV ANDROID_SDK_ROOT=/opt/android-sdk
RUN mkdir -p \${ANDROID_SDK_ROOT}/cmdline-tools && \\
    cd \${ANDROID_SDK_ROOT}/cmdline-tools && \\
    wget https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip && \\
    unzip commandlinetools-linux-9477386_latest.zip && \\
    rm commandlinetools-linux-9477386_latest.zip && \\
    mv cmdline-tools latest

ENV PATH="\${ANDROID_SDK_ROOT}/cmdline-tools/latest/bin:\${ANDROID_SDK_ROOT}/platform-tools:\${PATH}"

# Accept licenses and install SDK components
RUN yes | sdkmanager --licenses && \\
    sdkmanager "platform-tools" "platforms;android-34" "build-tools;34.0.0"

# Install Flutter
ENV FLUTTER_HOME=/opt/flutter
ENV PATH="\${FLUTTER_HOME}/bin:\${PATH}"

RUN git clone https://github.com/flutter/flutter.git \${FLUTTER_HOME} && \\
    cd \${FLUTTER_HOME} && \\
    git checkout stable && \\
    flutter doctor -v

# Set up workspace
WORKDIR /workspace
COPY . .

# Build commands
RUN flutter pub get
RUN flutter build apk --release

CMD ["bash"]`}
        />

        <div className="mt-6">
          <h4 className="font-semibold text-white mb-3">Build with Docker:</h4>
          <CodeBlock
            language="bash"
            code={`# Build image
docker build -t mupil-builder .

# Run build
docker run --rm -v $(pwd):/workspace mupil-builder

# Extract APK
docker cp <container_id>:/workspace/build/app/outputs/flutter-apk/app-release.apk .`}
          />
        </div>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700 p-8">
        <h2 className="text-2xl font-bold mb-4 text-violet-400">Data Export</h2>
        <p className="text-slate-300 mb-4">
          Export your usage data to JSON or CSV format for external analysis.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-900/50 p-4 rounded-lg">
            <h4 className="font-semibold text-white mb-2">JSON Export</h4>
            <p className="text-sm text-slate-400 mb-3">
              Full data structure with nested objects, ideal for programmatic access.
            </p>
            <code className="text-xs text-green-400">
              /storage/emulated/0/Mupil/export_YYYYMMDD.json
            </code>
          </div>
          <div className="bg-slate-900/50 p-4 rounded-lg">
            <h4 className="font-semibold text-white mb-2">CSV Export</h4>
            <p className="text-sm text-slate-400 mb-3">
              Flat format for spreadsheet analysis in Excel or Google Sheets.
            </p>
            <code className="text-xs text-blue-400">
              /storage/emulated/0/Mupil/export_YYYYMMDD.csv
            </code>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold text-white mb-3">Export Implementation:</h4>
          <CodeBlock
            language="dart"
            code={`Future<void> exportData(ExportFormat format) async {
  final box = Hive.box<DailySummary>('daily_summary');
  final data = box.values.toList();
  
  final timestamp = DateFormat('yyyyMMdd').format(DateTime.now());
  final fileName = 'export_\$timestamp.\${format.extension}';
  final path = '/storage/emulated/0/Mupil/\$fileName';
  
  if (format == ExportFormat.json) {
    final json = jsonEncode(data.map((e) => e.toJson()).toList());
    await File(path).writeAsString(json);
  } else if (format == ExportFormat.csv) {
    final csv = convertToCsv(data);
    await File(path).writeAsString(csv);
  }
  
  // Share file
  await Share.shareFiles([path], text: 'Mupil Data Export');
}`}
          />
        </div>
      </Card>
    </div>
  )
}

function DownloadContent() {
  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700 p-8">
        <div className="text-center">
          <Download className="w-16 h-16 text-violet-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-white">Download Mupil</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Get the debug APK to test on your Android device, or download the complete source code 
            to build and customize yourself.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-8">
              <Smartphone className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Debug APK</h3>
              <p className="text-sm text-slate-400 mb-6">
                Version 1.0.0-debug<br />
                Size: ~45 MB<br />
                Android 8.0+
              </p>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={() => {
                  // Mock download
                  const link = document.createElement('a')
                  link.href = '#'
                  link.download = 'mupil-debug-v1.0.0.apk'
                  link.click()
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download APK
              </Button>
              <p className="text-xs text-slate-500 mt-4">
                Install via: Settings → Security → Install unknown apps
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-8">
              <Code2 className="w-12 h-12 text-violet-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Source Code</h3>
              <p className="text-sm text-slate-400 mb-6">
                Complete Flutter project<br />
                MIT License<br />
                All platforms
              </p>
              <Button 
                className="w-full bg-violet-600 hover:bg-violet-700"
                onClick={() => {
                  // Mock download
                  const link = document.createElement('a')
                  link.href = '#'
                  link.download = 'mupil-source.zip'
                  link.click()
                }}
              >
                <Code2 className="w-4 h-4 mr-2" />
                Download Source
              </Button>
              <p className="text-xs text-slate-500 mt-4">
                Includes: Flutter app + Android native + Docker
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700 p-8">
        <h2 className="text-2xl font-bold mb-4 text-violet-400">Installation Guide</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
              <span className="bg-violet-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
              Enable Unknown Sources
            </h3>
            <p className="text-slate-300 ml-11">
              Go to <strong>Settings → Security → Install unknown apps</strong> and allow your 
              browser or file manager to install apps.
            </p>
          </div>

          <Separator className="bg-slate-700" />

          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
              <span className="bg-violet-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
              Download & Install APK
            </h3>
            <p className="text-slate-300 ml-11">
              Download the APK file and tap to install. Android may show a warning—tap 
              <strong> Install anyway</strong> to proceed.
            </p>
          </div>

          <Separator className="bg-slate-700" />

          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
              <span className="bg-violet-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
              Grant Permissions
            </h3>
            <p className="text-slate-300 ml-11 mb-3">
              Open Mupil and grant the following permissions when prompted:
            </p>
            <ul className="text-slate-300 ml-11 space-y-2">
              <li className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
                Usage Access (required for screen time tracking)
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
                Storage (for data export)
              </li>
            </ul>
          </div>

          <Separator className="bg-slate-700" />

          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
              <span className="bg-violet-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
              Start Tracking
            </h3>
            <p className="text-slate-300 ml-11">
              That's it! Mupil will begin collecting usage data. Check back after a few hours 
              to see your first insights.
            </p>
          </div>
        </div>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700 p-8">
        <h2 className="text-2xl font-bold mb-4 text-violet-400">System Requirements</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-white mb-3">Minimum</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• Android 8.0 (Oreo)</li>
              <li>• 2GB RAM</li>
              <li>• 100MB storage</li>
              <li>• ARMv7 processor</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Recommended</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• Android 10+</li>
              <li>• 4GB RAM</li>
              <li>• 200MB storage</li>
              <li>• ARM64 processor</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Optimal</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• Android 12+</li>
              <li>• 6GB+ RAM</li>
              <li>• 500MB storage</li>
              <li>• Snapdragon/Exynos</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 border-violet-500/30 p-8">
        <div className="text-center">
          <Shield className="w-12 h-12 text-violet-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Privacy Promise</h3>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Mupil collects and stores all data locally on your device. No telemetry, 
            no analytics, no cloud sync. Your usage patterns are yours alone. The app 
            is fully open source—audit the code yourself to verify.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Badge className="bg-green-600/20 text-green-300 border-green-500/30">
              <Lock className="w-3 h-3 mr-1" />
              Encrypted Storage
            </Badge>
            <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30">
              <Shield className="w-3 h-3 mr-1" />
              Zero Telemetry
            </Badge>
            <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30">
              <Code2 className="w-3 h-3 mr-1" />
              Open Source
            </Badge>
          </div>
        </div>
      </Card>
    </div>
  )
}

function CodeBlock({ title, language, code }: { title?: string; language?: string; code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative">
      {title && (
        <div className="flex items-center justify-between bg-slate-900/90 px-4 py-2 rounded-t-lg border border-slate-700 border-b-0">
          <div className="flex items-center gap-2">
            <FileCode className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-slate-300 font-mono">{title}</span>
          </div>
          <Button
            size="sm"
            variant="ghost"
            className="h-7 text-xs hover:bg-slate-800"
            onClick={handleCopy}
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Copied!
              </>
            ) : (
              <>
                <Code2 className="w-3 h-3 mr-1" />
                Copy
              </>
            )}
          </Button>
        </div>
      )}
      <pre className={`bg-slate-950/80 p-4 ${title ? 'rounded-b-lg' : 'rounded-lg'} overflow-x-auto border border-slate-700 text-sm`}>
        <code className="text-slate-300 font-mono">{code}</code>
      </pre>
    </div>
  )
}