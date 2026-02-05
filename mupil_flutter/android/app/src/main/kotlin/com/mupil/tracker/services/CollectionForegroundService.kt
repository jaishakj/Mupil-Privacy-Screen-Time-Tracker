package com.mupil.tracker.services

import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.Service
import android.content.Context
import android.content.Intent
import android.os.Build
import android.os.IBinder
import androidx.core.app.NotificationCompat

class CollectionForegroundService : Service() {
    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        val channelId = "mupil_collection"
        val notificationManager = getSystemService(NotificationManager::class.java)

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channel = NotificationChannel(
                channelId,
                "Mupil Background Collection",
                NotificationManager.IMPORTANCE_LOW
            )
            notificationManager.createNotificationChannel(channel)
        }

        val notification: Notification = NotificationCompat.Builder(this, channelId)
            .setContentTitle("Mupil is tracking locally")
            .setContentText("Screen-off activity and network usage are being collected")
            .setSmallIcon(android.R.drawable.ic_menu_info_details)
            .build()

        startForeground(42, notification)
        collectSnapshot(this)
        return START_STICKY
    }

    override fun onBind(intent: Intent?): IBinder? = null

    companion object {
        fun collectSnapshot(context: Context) {
            // Future extension point:
            // Persist usage + traffic snapshots to Hive through platform channel callbacks.
        }
    }
}
