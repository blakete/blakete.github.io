#!/bin/bash

# Convert all posts to use last_updated in front matter
for file in _posts/*.md; do
  # Check if the file contains the Last Updated text
  if grep -q "Last Updated:" "$file"; then
    echo "Processing $file..."
    
    # Extract the date from the Last Updated line
    date_value=$(grep -m 1 "Last Updated:" "$file" | sed 's/.*Last Updated:[[:space:]]*\(.*\)[[:space:]]*$/\1/')
    
    # Remove the Last Updated line (or comment it out)
    sed -i '' 's/\*\*Last Updated:\*\*.*//' "$file"
    
    # Add the last_updated field to front matter
    # This assumes the front matter ends with "---" on its own line
    sed -i '' "/^---$/,/^---$/ s/---$/last_updated: $date_value\n---/" "$file"
    
    echo "  Updated with last_updated: $date_value"
  fi
done

echo "All posts updated!" 