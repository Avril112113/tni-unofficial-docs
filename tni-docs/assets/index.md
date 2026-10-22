{% assign path_parts = page.path | split: "/" %}
{% assign parent_folder = path_parts | slice: -2 %}
{% assign dir_parts = path_parts | pop %}
{% assign source_dir = dir_parts | join: "/" %}

# File Listing

<ul>
	{% for file in site.static_files reversed %}
		{% if file.path contains source_dir %}
			<li>
				<a href="{{ site.baseurl }}{{ file.path }}">.{{ file.path | replace: source_dir, "" | remove_first: "/" }}</a>
			</li>
		{% endif %}
	{% endfor %}
</ul>
