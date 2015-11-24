#!/bin/sh
git checkout gh-pages
git merge master
git checkout master
git push
git push origin gh-pages:gh-pages
