#!/bin/bash
# bundle exec jekyll serve --open-url --livereload --force_polling --config _config.yml,_config_local.yml
bundle exec jekyll serve --livereload --force_polling --config _config.yml,_config_local.yml &
sleep 1
open http://127.0.0.1:4000/private_local/
