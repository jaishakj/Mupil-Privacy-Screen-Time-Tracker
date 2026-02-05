// GENERATED CODE - MANUALLY MAINTAINED FOR BOOTSTRAP

part of 'app_usage.dart';

class AppUsageAdapter extends TypeAdapter<AppUsage> {
  @override
  final int typeId = 1;

  @override
  AppUsage read(BinaryReader reader) {
    final numOfFields = reader.readByte();
    final fields = <int, dynamic>{
      for (int i = 0; i < numOfFields; i++) reader.readByte(): reader.read(),
    };
    return AppUsage(
      packageName: fields[0] as String,
      appName: fields[1] as String,
      date: fields[2] as DateTime,
      foregroundMillis: fields[3] as int,
      backgroundMillis: fields[4] as int,
      wifiBytes: fields[5] as int,
      mobileBytes: fields[6] as int,
      launches: fields[7] as int,
    );
  }

  @override
  void write(BinaryWriter writer, AppUsage obj) {
    writer
      ..writeByte(8)
      ..writeByte(0)
      ..write(obj.packageName)
      ..writeByte(1)
      ..write(obj.appName)
      ..writeByte(2)
      ..write(obj.date)
      ..writeByte(3)
      ..write(obj.foregroundMillis)
      ..writeByte(4)
      ..write(obj.backgroundMillis)
      ..writeByte(5)
      ..write(obj.wifiBytes)
      ..writeByte(6)
      ..write(obj.mobileBytes)
      ..writeByte(7)
      ..write(obj.launches);
  }
}
