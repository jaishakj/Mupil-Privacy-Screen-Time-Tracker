@ECHO OFF
SET DIRNAME=%~dp0
IF EXIST "%DIRNAME%\gradle\wrapper\gradle-wrapper.jar" GOTO run
ECHO gradle-wrapper.jar missing. Run Android build from Linux/macOS container or regenerate wrappers.
EXIT /B 1
:run
"%JAVA_HOME%\bin\java.exe" -classpath "%DIRNAME%\gradle\wrapper\gradle-wrapper.jar" org.gradle.wrapper.GradleWrapperMain %*
