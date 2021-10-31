set -e


git add .
git commit -m 'update daily'

git remote -v

git push -f origin master
