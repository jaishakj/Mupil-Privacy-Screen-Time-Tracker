# Mupil - Privacy-First Usage Tracker

A fully offline Android application that tracks screen time, data usage, and background activity without compromising privacy. All data stays on your device.

## Features

- **Screen Time Tracking**: Per-app daily usage statistics
- **Data Usage Monitoring**: Wi-Fi and mobile data consumption per app
- **Background Activity**: Track apps running while screen is off
- **Privacy-First**: No third-party analytics, no cloud sync, all data local
- **Dark Theme**: Minimal, eye-friendly interface
- **Data Export**: Manual JSON/CSV export via file sharing

## Architecture

```
lib/
├── main.dart                 # App entry point
├── screens/
│   ├── home_screen.dart      # Main dashboard
│   ├── detail_screen.dart    # Per-app details
│   └── insights_screen.dart  # Analytics and charts
├── services/
│   ├── usage_service.dart    # UsageStatsManager wrapper
│   ├── network_service.dart  # TrafficStats wrapper
│   └── background_service.dart # Background monitoring
├── models/
│   ├── app_usage.dart        # Usage data model
│   └── daily_summary.dart    # Daily aggregation model
├── storage/
│   ├── hive_adapter.dart     # Database configuration
│   └── encryption.dart       # Local encryption helpers
├── widgets/
│   ├── usage_card.dart       # Reusable UI components
│   └── app_list_tile.dart    # App usage display
├── charts/
│   ├── usage_chart.dart      # Screen time visualization
│   └── data_chart.dart       # Data usage graphs
└── themes/
    └── dark_theme.dart       # App theming
```

## Prerequisites

- Flutter SDK 3.16+
- Android Studio
- Android SDK 30+
- Java 17+
- Docker (for containerized builds)

## Setup Instructions

### 1. Environment Setup

```bash
# Install Flutter
git clone https://github.com/flutter/flutter.git -b stable
export PATH="$PATH:`pwd`/flutter/bin"

# Verify installation
flutter doctor

# Clone and setup project
git clone <repository-url> mupil
cd mupil
flutter pub get
```

### 2. Android Configuration

Add these permissions to `android/app/src/main/AndroidManifest.xml`:

```xml
<uses-permission android:name="android.permission.PACKAGE_USAGE_STATS" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
```

### 3. Build Configuration

Configure signing in `android/app/build.gradle`:

```gradle
android {
    signingConfigs {
        release {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile keystoreProperties['storeFile'] ? file(keystoreProperties['storeFile']) : null
            storePassword keystoreProperties['storePassword']
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}
```

## Docker Build Environment

Use the included Dockerfile for reproducible builds:

```bash
# Build Docker image
docker build -t mupil-builder .

# Run containerized build
docker run --rm -v $(pwd):/workspace mupil-builder
```

## Development

### Running in Debug Mode

```bash
# Connect Android device or start emulator
flutter devices

# Run debug build
flutter run --debug
```

### Building Release APK

```bash
# Build release APK
flutter build apk --release

# Build App Bundle (for Play Store)
flutter build appbundle --release
```

### Testing

```bash
# Run unit tests
flutter test

# Run integration tests
flutter test integration_test/
```

## Usage

### First Launch

1. Grant **Usage Access** permission in Settings
2. Enable **Network Statistics** access
3. Optionally enable **Accessibility Service** for enhanced tracking

### Main Features

- **Home Screen**: Overview of daily usage and data consumption
- **Detail Screen**: Drill down into specific app statistics
- **Insights Screen**: Weekly/monthly trends and comparisons
- **Export**: Share usage data as JSON/CSV files

### Data Export

Navigate to Settings → Export Data to generate:
- JSON format for programmatic access
- CSV format for spreadsheet analysis

## Privacy & Security

- **Local Storage**: All data encrypted with Hive and stored locally
- **No Analytics**: Zero third-party tracking or telemetry
- **No Network**: App functions completely offline
- **User Control**: Full data ownership and export capabilities

## Technical Implementation

### Key Components

1. **UsageStatsManager Integration**
   - Queries app usage statistics
   - Handles permission requests
   - Aggregates daily/weekly data

2. **TrafficStats Monitoring**
   - Tracks Wi-Fi and mobile data per UID
   - Calculates data usage trends
   - Separates foreground/background usage

3. **Background Service**
   - Runs as foreground service for reliability
   - Periodic data collection via WorkManager
   - Battery optimization compliance

4. **Local Database**
   - Hive for fast, encrypted storage
   - Custom adapters for data models
   - Automatic backup and recovery

### Performance Considerations

- Efficient query batching to minimize system calls
- Background processing to avoid UI blocking
- Smart caching to reduce repeated calculations
- Memory management for large datasets

## Troubleshooting

### Common Issues

**Permission Denied for Usage Stats**
- Navigate to Settings → Apps → Special Access → Usage Access
- Enable permission for Mupil

**Background Service Stopped**
- Check battery optimization settings
- Whitelist Mupil from power management

**Data Not Updating**
- Verify permissions are granted
- Restart the background service
- Check Android version compatibility (10+)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Implement changes with tests
4. Submit pull request

## License

MIT License - see LICENSE file for details

## Changelog

### v1.0.0
- Initial release
- Basic usage and data tracking
- Dark theme implementation
- Export functionality

---


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

**Note**: This application requires Android 10+ and proper permissions to function. All data processing occurs locally on the device.
