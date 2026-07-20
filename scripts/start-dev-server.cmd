@echo off
cd /d "%~dp0.."
set CI=true
set BROWSER=none
node.exe scripts\set-build-version.js development
node.exe node_modules\react-scripts\bin\react-scripts.js start
