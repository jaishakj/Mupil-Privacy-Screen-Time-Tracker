// GENERATED CODE - MANUALLY MAINTAINED FOR BOOTSTRAP

part of 'daily_summary.dart';

class DailySummaryAdapter extends TypeAdapter<DailySummary> {
  @override
  final int typeId = 2;

  @override
  DailySummary read(BinaryReader reader) {
    final numOfFields = reader.readByte();
    final fields = <int, dynamic>{
      for (int i = 0; i < numOfFields; i++) reader.readByte(): reader.read(),
    };

    return DailySummary(
      date: fields[0] as DateTime,
      totalScreenMillis: fields[1] as int,
      totalBackgroundMillis: fields[2] as int,
      totalWifiBytes: fields[3] as int,
      totalMobileBytes: fields[4] as int,
      topApps: (fields[5] as List).cast<String>(),
    );
  }

  @override
  void write(BinaryWriter writer, DailySummary obj) {
    writer
      ..writeByte(6)
      ..writeByte(0)
      ..write(obj.date)
      ..writeByte(1)
      ..write(obj.totalScreenMillis)
      ..writeByte(2)
      ..write(obj.totalBackgroundMillis)
      ..writeByte(3)
      ..write(obj.totalWifiBytes)
      ..writeByte(4)
      ..write(obj.totalMobileBytes)
      ..writeByte(5)
      ..write(obj.topApps);
  }
}
