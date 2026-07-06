@echo off
.\node_modules\.bin\esbuild ^
	DeviceCalc=tools/DeviceCalc/src/index.ts ^
	vendor/webawesome=assets\js\webawesome-vendor.js ^
	--bundle --minify --splitting --sourcemap --format=esm ^
	--outdir=assets/js/ ^
	--chunk-names=chunks/[name]-[hash] ^
	--tsconfig=tsconfig.json %*
