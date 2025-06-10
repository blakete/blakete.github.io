# _plugins/ignore_symlinks.rb

Jekyll::Hooks.register :site, :after_reset do |site|
  # Filter out symlinks from collections
  site.collections.each do |name, collection|
    collection.docs.reject! do |doc|
      File.symlink?(doc.path)
    end
  end
  
  # Filter out symlinks from pages
  site.pages.reject! do |page|
    File.symlink?(page.path)
  end
  
  # Filter out symlinks from static files
  site.static_files.reject! do |file|
    File.symlink?(file.path)
  end
end

# Additional hook to ensure symlinks are filtered after site reads files
Jekyll::Hooks.register :site, :post_read do |site|
  # Filter collections again in case new docs were added
  site.collections.each do |name, collection|
    collection.docs.reject! do |doc|
      File.symlink?(doc.path)
    end
  end
  
  # Filter pages again
  site.pages.reject! do |page|
    File.symlink?(page.path)
  end
  
  # Filter static files again
  site.static_files.reject! do |file|
    File.symlink?(file.path)
  end
end

# Custom generator to ensure symlinks are excluded during site generation
class IgnoreSymlinksGenerator < Jekyll::Generator
  priority :highest
  
  def generate(site)
    # Final pass to remove any symlinks that might have been missed
    site.collections.each do |name, collection|
      collection.docs.reject! do |doc|
        File.symlink?(doc.path)
      end
    end
    
    site.pages.reject! do |page|
      File.symlink?(page.path)
    end
    
    site.static_files.reject! do |file|
      File.symlink?(file.path)
    end
  end
end