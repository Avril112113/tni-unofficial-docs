---
title: Raw Data
permalink: /raw/
---

# Raw Data - Information

Included are files for;  

- `.json`, formatted as `data-GAMEVER.VER.VER-REVISION.json`, as well as `data-latest.json`  
- `.ts`, formatted as `data-formatXXX-spec.ts`  

If a breaking structural change is made, or the devs changed something, the data's `"format"` will be incremented.  
Any changes to the format (additions or removals) will incur a format version increase.  
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

# Format History
1. Initial format...
2. Added theme configs. *(non-breaking)*
3. Added device ports & plug types. *(non-breaking)*
4. Added use_config field `constraint_descript`. *(non-breaking)*
5. Added section `BalanceCalc`. *(non-breaking)*
6. Added section `merchants`. *(non-breaking)*
