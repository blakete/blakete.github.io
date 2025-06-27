Jekyll::Hooks.register :site, :post_read do |site|
  if site.collections['private_local']
    # Filter out symbolic links from the docs collection to prevent conflicts
    original_docs = site.collections['private_local'].docs
    non_symlink_docs = []
    
    original_docs.each do |doc|
      if File.symlink?(doc.path)
        # Mark symbolic links but don't include them in processing
        doc.data['is_symlink'] = true
        
        # Extract view directory from symlink path
        if doc.path.include?('views/')
          view_dir = doc.path.split('views/')[1].split('/')[0]
          doc.data['view_category'] = view_dir
        end
        
        # Skip adding symlinks to the docs collection for processing
        next
      else
        doc.data['is_symlink'] = false
        non_symlink_docs << doc
      end
    end
    
    # Replace the docs collection with only non-symlink documents
    site.collections['private_local'].docs = non_symlink_docs
  end
end