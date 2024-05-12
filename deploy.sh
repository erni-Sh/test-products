#!/usr/bin/env sh

set -e
npm run build
cd dist

# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

#git push -f git@github.com:erni-Sh/test-products.git master:gh-pages
git subtree push --prefix dist origin gh-pages

cd -