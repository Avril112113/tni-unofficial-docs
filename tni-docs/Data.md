---
title: Data
permalink: /data
---

All the game's data, collected by a script and generated into the following;  

## Raw Data
View the files at; [{{ '/raw' | absolute_url }}]({{ '/raw' | absolute_url }})  
They include; `.json` data and `.ts` spec.  
The files are formatted as `data-GAMEVER.VER.VER-REVISION.json`, as well as `data-latest.json`  (similar for other file types)  
If a breaking structural change is made, or we know the devs changed something internally that we know of, the json data's `"format"` will be incremented.  
Any change in game version may bring unexpected breaking changes, as the game's internals may have changed, please [make an issue on the github](https://github.com/Avril112113/tni-unofficial-docs/issues) if the format number was not incremented.  
The fields `"game_version"`, `"revision"` and `"format"` will always be present and never change type.  


## Human readable pages
