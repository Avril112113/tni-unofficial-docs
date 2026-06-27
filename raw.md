---
title: Raw Data
permalink: /raw/
---

# Raw Data - Information

Include are files for; `.json` data and `.ts` spec.  

The files are formatted as `data-GAMEVER.VER.VER-REVISION.json`, as well as `data-latest.json`  (similar for other file types)  
If a breaking structural change is made, or we know the devs changed something breaking that we know of, the json data's `"format"` will be incremented.  
The fields `"game_version"`, `"revision"` and `"format"` will always be present and never change type.  

Any change to the game version may bring unexpected breaking changes, as the game's internals may have changed, please [make an issue on the github](https://github.com/Avril112113/tni-unofficial-docs/issues) if the format number was not incremented.  

# File Listings

<ul>
	{% for file in site.static_files %}
		{% if file.path contains '/raw/' %}
			<li>
				<a href="{{ site.baseurl }}{{ file.path }}">{{ file.name }}</a>
			</li>
		{% endif %}
	{% endfor %}
</ul>
