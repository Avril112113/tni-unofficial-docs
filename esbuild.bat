@echo off
.\node_modules\.bin\esbuild ^
	lit=node_modules/lit/index.js ^
	lit/decorators=node_modules/lit/decorators.js ^
	lit/directives/ref=node_modules/lit/directives/ref.js ^
	lit/directives/cache=node_modules/lit/directives/cache.js ^
	lit/directives/if-defined=node_modules/lit/directives/if-defined.js ^
	lit/directives/live=node_modules/lit/directives/live.js ^
	@lit/context=node_modules/@lit/context/index.js ^
	lodash=node_modules/lodash/index.js ^
	lz-string=node_modules/lz-string/libs/lz-string.js ^
	webawesome=assets\js\webawesome-vendor.js ^
	--bundle --minify --splitting --format=esm --outdir=assets/js/vendor
