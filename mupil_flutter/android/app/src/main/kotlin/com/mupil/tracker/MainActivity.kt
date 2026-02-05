package com.mupil.tracker

import android.app.AppOpsManager
import android.app.usage.UsageStatsManager
import android.content.Context
import android.content.Intent
import android.net.TrafficStats
import android.os.Build
import android.provider.Settings
import androidx.core.content.ContextCompat
import com.mupil.tracker.services.CollectionForegroundService
import io.flutter.embedding.android.FlutterActivity
import io.flutter.embedding.engine.FlutterEngine
import io.flutter.plugin.common.MethodChannel

class MainActivity: FlutterActivity() {
    override fun configureFlutterEngine(flutterEngine: FlutterEngine) {
        super.configureFlutterEngine(flutterEngine)

        MethodChannel(flutterEngine.dartExecutor.binaryMessenger, "mupil/usage")
            .setMethodCallHandler { call, result ->
                when (call.method) {
                    "hasUsagePermission" -> result.success(hasUsageStatsPermission())
                    "openUsageSettings" -> {
                        startActivity(Intent(Settings.ACTION_USAGE_ACCESS_SETTINGS))
                        result.success(null)
                    }
                    "getDailyUsage" -> result.success(UsageStatsReader(this).readDaily())
                    else -> result.notImplemented()
                }
            }

        MethodChannel(flutterEngine.dartExecutor.binaryMessenger, "mupil/network")
            .setMethodCallHandler { call, result ->
                when (call.method) {
                    "getAppTraffic" -> result.success(NetworkStatsReader(this).readTrafficByUid())
                    else -> result.notImplemented()
                }
            }

        MethodChannel(flutterEngine.dartExecutor.binaryMessenger, "mupil/background")
            .setMethodCallHandler { call, result ->
                when (call.method) {
                    "startForegroundCollector" -> {
                        val intent = Intent(this, CollectionForegroundService::class.java)
                        ContextCompat.startForegroundService(this, intent)
                        result.success(null)
                    }
                    "stopForegroundCollector" -> {
                        stopService(Intent(this, CollectionForegroundService::class.java))
                        result.success(null)
                    }
                    "collectSnapshot" -> {
                        CollectionForegroundService.collectSnapshot(this)
                        result.success(null)
                    }
                    else -> result.notImplemented()
                }
            }
    }

    private fun hasUsageStatsPermission(): Boolean {
        val appOps = getSystemService(Context.APP_OPS_SERVICE) as AppOpsManager
        val mode = appOps.unsafeCheckOpNoThrow(
            "android:get_usage_stats",
            android.os.Process.myUid(),
            packageName
        )
        return mode == AppOpsManager.MODE_ALLOWED
    }
}
