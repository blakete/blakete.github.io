# Blake's Notes

https://blakesnotes.io or https://blakete.github.io
<br><br>

## Prerequisites for Locally Building and Serving

*  Ruby

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

## Webpage Design Inspiration Credits

- https://siboehm.com/
