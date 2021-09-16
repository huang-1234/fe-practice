set -e


git add .
git commit -m 'update js'

git remote -v

git push -f origin master
