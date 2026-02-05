# Mupil — Offline Privacy-First Android Screen-Time Tracker

Mupil is a fully offline Android (10+) Flutter application that tracks:

- per-day screen time by app
- per-app data usage (Wi‑Fi + mobile)
- background activity while screen is off

No analytics SDKs, no cloud sync, no backend: **data never leaves the device unless the user manually exports JSON/CSV**.

## Project Layout

```text
mupil_flutter/
├── lib/
│   ├── main.dart
│   ├── screens/
│   │   ├── home_screen.dart
│   │   ├── detail_screen.dart
│   │   └── insights_screen.dart
│   ├── services/
│   │   ├── usage_service.dart
│   │   ├── network_service.dart
│   │   ├── background_service.dart
│   │   ├── export_service.dart
│   │   └── mupil_api.dart
│   ├── models/
│   │   ├── app_usage.dart
│   │   └── daily_summary.dart
│   ├── storage/
│   │   ├── hive_adapter.dart
│   │   └── encryption.dart
│   ├── themes/dark_theme.dart
│   ├── widgets/
│   │   ├── usage_card.dart
│   │   └── app_list_tile.dart
│   └── charts/
│       ├── usage_chart.dart
│       └── data_chart.dart
├── android/
│   └── app/src/main/
│       ├── AndroidManifest.xml
│       ├── kotlin/com/mupil/tracker/
│       │   ├── MainActivity.kt
│       │   ├── UsageStatsReader.kt
│       │   ├── NetworkStatsReader.kt
│       │   └── services/
│       │       ├── CollectionForegroundService.kt
│       │       └── MupilAccessibilityService.kt
│       └── res/xml/accessibility_service_config.xml
└── pubspec.yaml
```

## Core Architecture

- **Flutter UI + business logic** in Dart.
- **Android native data access** via MethodChannels:
  - `UsageStatsManager` -> foreground usage sessions.
  - `TrafficStats` -> per-UID traffic counters.
  - optional `AccessibilityService` -> in-app surface inference hooks.
- **Local encrypted persistence** via Hive AES cipher.
- **REST-like Dart API façade**: `MupilApi` consumed by screens/widgets.
- **Charts** rendered with `fl_chart`.

## Permissions and Background Collection

Required permissions declared in `AndroidManifest.xml`:

- `PACKAGE_USAGE_STATS`
- `FOREGROUND_SERVICE`
- `ACCESS_NETWORK_STATE`
- `POST_NOTIFICATIONS` (Android 13+)
- optional accessibility binding for enhanced behavior inference

Background collection support:

- `workmanager` periodic task every ~15 minutes
- Android foreground service (`CollectionForegroundService`) for resilient polling

## Setup (Local)

### 1) Prerequisites

- Flutter SDK 3.16+
- Java 17+
- Android SDK 34
- Android Studio / adb

### 2) Install dependencies

```bash
cd mupil_flutter
flutter pub get
```

### 3) Run debug app

```bash
flutter run --debug
```

### 4) Build debug APK

```bash
flutter build apk --debug
```

Expected output:

```text
mupil_flutter/build/app/outputs/flutter-apk/app-debug.apk
```

### 5) Build release APK

```bash
flutter build apk --release
```

For signing, create `mupil_flutter/android/key.properties` and configure keystore values.

## Docker Reproducible Build

Build image and compile debug APK in container:

```bash
docker build -t mupil-builder .
docker run --rm -v "$(pwd)":/workspace mupil-builder
```

## CI

GitHub Actions workflow (`.github/workflows/flutter-docker-ci.yml`) builds inside Docker and uploads `app-debug.apk` as artifact.

## Data Export

In HomeScreen menu:

- **Export JSON**
- **Export CSV**

Files are generated locally then shared with Android share sheet. No automatic sync.

## Privacy Model

- All metrics stored on-device only.
- Hive boxes are encrypted using an AES key loaded/stored via secure storage.
- No telemetry or third-party analytics dependencies.

## Notes

- `TrafficStats` counters are UID-level cumulative values; production-grade deltas should be computed against snapshots.
- Accessibility-based inference is optional and implemented as a hook for future per-surface classifiers.
