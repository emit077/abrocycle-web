#!/usr/bin/env sh
# abort on errors
set -e

# build
# echo "Building the project..."
# npm run build

# # navigate into the build output directory
# echo "Navigating to build directory..."
# cd out

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# create .nojekyll file to bypass Jekyll processing
touch .nojekyll

# initialize git and deploy
echo "Initializing git repository..."
git init
git add -A
git commit -m 'deploy in GitHub Pages'

echo "Deploying to GitHub Pages..."
git push -f git@github.com:emit077/abrocycle-web.github.io.git master:gh-pages

# go back to project root
cd -

echo "Deployment completed successfully!"
