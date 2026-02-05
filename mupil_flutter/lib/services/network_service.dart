import 'package:flutter/services.dart';

class NetworkService {
  NetworkService._();
  static final NetworkService instance = NetworkService._();

  static const MethodChannel _channel = MethodChannel('mupil/network');

  Future<List<Map<String, dynamic>>> appTraffic() async {
    final result = await _channel.invokeMethod<List<dynamic>>('getAppTraffic');
    return (result ?? <dynamic>[]).cast<Map>().map((e) {
      return e.cast<String, dynamic>();
    }).toList();
  }
}
