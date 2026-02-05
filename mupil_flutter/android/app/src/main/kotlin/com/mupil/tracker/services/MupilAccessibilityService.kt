package com.mupil.tracker.services

import android.accessibilityservice.AccessibilityService
import android.view.accessibility.AccessibilityEvent

class MupilAccessibilityService : AccessibilityService() {
    override fun onAccessibilityEvent(event: AccessibilityEvent?) {
        // Optional inference hook:
        // detect packageName + view IDs for feed/reels/chat surfaces.
    }

    override fun onInterrupt() {
        // no-op
    }
}
