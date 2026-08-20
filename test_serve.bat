@echo off

@REM openssl req -x509 -sha256 -nodes -newkey rsa:2048 -days 365 -keyout localhost.key -out localhost.crt
@REM bundler exec jekyll serve --watch --incremental --host=0.0.0.0 --ssl-key localhost.key --ssl-cert localhost.crt

bundler exec jekyll serve --livereload --watch --incremental --host=0.0.0.0
