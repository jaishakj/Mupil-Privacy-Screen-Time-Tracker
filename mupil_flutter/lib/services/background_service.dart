import 'package:flutter/services.dart';
import 'package:workmanager/workmanager.dart';

const _pollTask = 'mupil_poll_task';

class BackgroundService {
  BackgroundService._();
  static final BackgroundService instance = BackgroundService._();

  static const MethodChannel _channel = MethodChannel('mupil/background');

  Future<void> initialize() async {
    await Workmanager().initialize(callbackDispatcher, isInDebugMode: false);
    await Workmanager().registerPeriodicTask(
      _pollTask,
      _pollTask,
      frequency: const Duration(minutes: 15),
      existingWorkPolicy: ExistingPeriodicWorkPolicy.keep,
      constraints: Constraints(
        networkType: NetworkType.not_required,
      ),
    );
  }

  Future<void> startForegroundCollector() async {
    await _channel.invokeMethod('startForegroundCollector');
  }

  Future<void> stopForegroundCollector() async {
    await _channel.invokeMethod('stopForegroundCollector');
  }
}

@pragma('vm:entry-point')
void callbackDispatcher() {
  Workmanager().executeTask((task, inputData) async {
    if (task == _pollTask) {
      const channel = MethodChannel('mupil/background');
      await channel.invokeMethod('collectSnapshot');
    }
    return Future.value(true);
  });
}
