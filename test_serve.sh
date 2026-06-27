#!/bin/bash
# If on WSL, builds are slow and you must add `--force-polling` for watch.
bundle exec jekyll serve --livereload --watch --incremental
