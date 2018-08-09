down: PEG.js GUN.js

PEG_VERSION = 0.10.0
GUN_VERSION = 0.6.3

PEG.js:
	wget -O $@ -c https://github.com/pegjs/pegjs/releases/download/v$(PEG_VERSION)/peg-$(PEG_VERSION).min.js

GUN.js:
	wget -O .zip -c https://github.com/amark/gun/archive/$(GUN_VERSION).zip
	unzip -p .zip gun-0.6.3/gun.min.js > $@
	rm -f .zip

