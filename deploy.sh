set -e

yarn build

cp HOSTREADME.md dist/README.md

cd dist

echo 'joebocock.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:JoeBocock/joebocock.github.io.git master
cd -
