#!/bin/bash

# Ensure exactly one argument is provided.
if [ "$#" -ne 1 ]; then
  echo "Usage: $0 \"Title of the post\""
  exit 1
fi

# Capture the title from the command line argument.
title="$1"

# Get the current date in YYYY-MM-DD format.
current_date=$(date +"%Y-%m-%d")

# Generate the filename by replacing spaces in the title with dashes.
filename="${current_date}-$(echo "$title" | tr ' ' '-')".md

# Create (or overwrite) the file with the blog post header.
cat > "$filename" <<EOF
---
layout: post
title: "$title"
author:
- Blake Edwards
tags: [post]
last_updated: $current_date
hidden_from_posts: false
---
EOF

echo "Markdown file created: $filename"

# Open the created file in nvim.
nvim "$filename"