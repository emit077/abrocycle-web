#!/usr/bin/env sh
# abort on errors
set -e

# build
echo "Building the project..."
npm run generate

# navigate into the build output directory
echo "Navigating to build directory..."
cd .output/public

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# create .nojekyll file to bypass Jekyll processing
echo "Creating .nojekyll file..."
touch .nojekyll

# initialize git and deploy
echo "Initializing git repository..."
git init
git add -A
git commit -m 'deploy to GitHub Pages'

# set the default branch to main
git branch -M main

echo "Deploying to GitHub Pages..."
git push -f git@github.com:emit077/abrocycle-web.git main:gh-pages

# go back to project root
cd -

echo "Deployment completed successfully!"
