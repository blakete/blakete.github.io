#!/bin/bash

# Ensure exactly one argument is provided.
if [ "$#" -ne 1 ]; then
  echo "Usage: $0 \"Title of the wiki page\""
  exit 1
fi

# Capture the title from the command line argument.
title="$1"

# Get the current date in YYYY-MM-DD format.
current_date=$(date +"%Y-%m-%d")

# Generate a slug from the title (lowercase, replace spaces with hyphens)
slug=$(echo "$title" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | sed 's/[^a-z0-9-]//g')

# Generate the filename
filename="${slug}.md"

# Ask if this should be a secret note
read -p "Should this be a secret note? (y/n): " is_secret_note
if [ "$is_secret_note" = "y" ]; then
  hidden_from_wiki="true"
  hidden_from_secret_wiki="false"
else
  hidden_from_wiki="false"
  hidden_from_secret_wiki="true"
fi

# Create (or overwrite) the file with the wiki page header.
cat > "$filename" <<EOF
---
layout: wiki_page
title: "$title"
date: $current_date
last_updated: $current_date
tags: [wiki]
hidden_from_wiki: ${hidden_from_wiki}
hidden_from_secret_wiki: ${hidden_from_secret_wiki}
---

A brief introduction to $title.

## Section 1

Content for section 1.

## Section 2

Content for section 2.

## References

1. Reference 1
2. Reference 2
EOF

echo "Wiki page created: $filename"

# Make the script executable
chmod +x "$0"

# Open the created file in nvim.
nvim "$filename" 