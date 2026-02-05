package com.mupil.tracker

import android.content.Context
import android.net.TrafficStats

class NetworkStatsReader(private val context: Context) {
    fun readTrafficByUid(): List<Map<String, Any>> {
        val packages = context.packageManager.getInstalledApplications(0)

        return packages.map { app ->
            val uid = app.uid
            val totalRx = TrafficStats.getUidRxBytes(uid).coerceAtLeast(0)
            val totalTx = TrafficStats.getUidTxBytes(uid).coerceAtLeast(0)

            mapOf(
                "packageName" to app.packageName,
                "wifiBytes" to totalRx,
                "mobileBytes" to totalTx
            )
        }
    }
}
