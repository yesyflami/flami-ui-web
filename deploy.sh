rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:yesyflami/flami-ui-web.git &&
git push -f -u origin master &&
cd -
echo https://yesyflami.github.io/flami-ui-web/index.html