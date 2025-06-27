Jekyll::Hooks.register :site, :post_read do |site|
  if site.collections['private_local']
    # Process all docs and set metadata, but prevent symlinks from generating output
    site.collections['private_local'].docs.each do |doc|
      if File.symlink?(doc.path)
        # Mark symbolic links and set view category metadata
        doc.data['is_symlink'] = true
        
        # Extract view directory from symlink path
        if doc.path.include?('views/')
          view_dir = doc.path.split('views/')[1].split('/')[0]
          doc.data['view_category'] = view_dir
        end
        
        # Prevent symlinks from generating output files (prevents conflicts)
        doc.data['published'] = false
      else
        doc.data['is_symlink'] = false
      end
    end
  end
end