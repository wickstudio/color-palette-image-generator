@echo off
setlocal

node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js is not installed.
    echo Downloading Node.js...
    powershell -Command "Start-Process 'https://nodejs.org/dist/v18.20.4/node-v18.20.4-x64.msi' -Wait"
    msiexec /i node-v18.20.4-x64.msi /quiet /norestart
    echo Node.js installation complete.
) else (
    echo Node.js is already installed.
)

echo Installing npm packages...
npm install
echo Packages installed successfully.

if exist node-v18.20.4-x64.msi (
    del node-v18.20.4-x64.msi
)

echo Installation complete. You can now run the start.bat to start the bot.
pause
