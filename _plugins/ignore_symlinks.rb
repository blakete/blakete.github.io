Jekyll::Hooks.register :site, :pre_render do |site|
  if site.collections['private_local']
    site.collections['private_local'].docs.each do |doc|
      # Mark symbolic links and capture their view directory
      if File.symlink?(doc.path)
        doc.data['is_symlink'] = true
        
        # Extract view directory from symlink path
        if doc.path.include?('views/')
          view_dir = doc.path.split('views/')[1].split('/')[0]
          doc.data['view_category'] = view_dir
        end
      else
        doc.data['is_symlink'] = false
      end
    end
  end
end