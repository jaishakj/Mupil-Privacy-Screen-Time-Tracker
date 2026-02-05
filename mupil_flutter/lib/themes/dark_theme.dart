import 'package:flutter/material.dart';

class DarkTheme {
  static final ThemeData themeData = ThemeData.dark().copyWith(
    scaffoldBackgroundColor: const Color(0xFF0B0B0F),
    colorScheme: const ColorScheme.dark(
      primary: Color(0xFF7C4DFF),
      secondary: Color(0xFF03DAC6),
      surface: Color(0xFF15151D),
    ),
    cardTheme: const CardThemeData(
      color: Color(0xFF15151D),
      elevation: 0,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.all(Radius.circular(12)),
      ),
    ),
  );
}
