# Blake's Notes

https://blakesnotes.io or https://blakete.github.io
<br><br>

## Prerequisites for Locally Building and Serving

* Ruby

    ```console
    sudo apt update
    sudo apt install ruby-full build-essential zlib1g-dev
    ```

* Avoid installing Ruby gems as root

    ```console
    echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
    echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
    echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
    source ~/.bashrc
    ```

* Bundler and Jekyl gems

    ```console
    gem install bundler jekyll
    ```

  * May need to opne a new terminal session if you get a permissions error (`source ~/.bashrc` didn't do the trick for some reason).

* NodeJs and npm

    ```console
    sudo apt install nodejs npm
    ```

* You should not have all the requirements to locally build and serve the webpage seen at [blakesnotes.io](https://blakesnotes.io).

## Locally Build and Serve

* If `Gemfile.lock` file exists, remove it

    ```console
    rm Gemfile.lock 
    ```

* Install Ruby gems

    ```console
    bundle install
    ```

* Build and serve locally

    ```console
    bundle exec jekyll serve
    ```

* (If you are using `_private_local` staging) **Build and serve locally**

    ```console
    bundle exec jekyll serve --open-url --livereload --force_polling --config _config.yml,_config_local.yml
    ```

    ```console
    bundle exec jekyll serve --livereload --force_polling --config _config.yml,_config_local.yml & sleep 2 && open "http://127.0.0.1:4000/secret-notes"
    ```

    ```console
    bundle exec jekyll serve --livereload --force_polling --config _config.yml,_config_local.yml & sleep 1 && open "http://127.0.0.1:4000/secret-notes/utdmuu_root"
    ```

    * **Add `--host 0.0.0.0` to serve to other LAN devices**

    * Private locally staged pages are served to `http://127.0.0.1:4000/secret-notes`

## Content Management

### Hiding Wiki Pages

To hide a wiki page from the main wiki listing, add the following to the frontmatter:

```yaml
hidden_from_wiki: true
```

### Hiding Blog Posts

To hide a blog post from the posts listing, add the following to the frontmatter:

```yaml
hidden_from_posts: true
```

This allows you to create drafts or private content that won't appear in public listings but can still be accessed directly by URL if you know the path.

### Places to change fonts

```_sass/minima/_layout.scss
.post-link {
  display: block;
  @include relative-font-size(1.3);
}
```

* Tags:

    ```assets/css/style.scss
    .post-tag, .wiki-tag {
    display: inline-block;
    background-color: #444;
    // color: #fff;
    color: #d1d1d1;
    padding: 2px 8px;
    margin-right: 5px;
    border-radius: 3px;
    font-size: 0.7em;  <---- here
    }
    ```

* 

    ```_sass/minima/initialize.scss
    $base-font-size:   17px !default;
    $base-font-weight: 400 !default;
    ```

## Inspiration Credits

* https://siboehm.com/
* https://dilithjay.com/
