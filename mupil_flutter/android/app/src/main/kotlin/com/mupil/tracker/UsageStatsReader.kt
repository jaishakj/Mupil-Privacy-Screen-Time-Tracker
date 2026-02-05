package com.mupil.tracker

import android.app.usage.UsageStatsManager
import android.content.Context
import android.content.pm.PackageManager

class UsageStatsReader(private val context: Context) {
    fun readDaily(): List<Map<String, Any>> {
        val usm = context.getSystemService(Context.USAGE_STATS_SERVICE) as UsageStatsManager
        val end = System.currentTimeMillis()
        val start = end - 24 * 60 * 60 * 1000
        val stats = usm.queryUsageStats(UsageStatsManager.INTERVAL_DAILY, start, end)
        val pm = context.packageManager

        return stats.map {
            val name = try {
                val app = pm.getApplicationInfo(it.packageName, 0)
                pm.getApplicationLabel(app).toString()
            } catch (_: PackageManager.NameNotFoundException) {
                it.packageName
            }

            mapOf(
                "packageName" to it.packageName,
                "appName" to name,
                "foregroundMillis" to it.totalTimeInForeground,
                "backgroundMillis" to 0,
                "launches" to 0
            )
        }
    }
}
