set -e


git add .
git commit -m 'update review'

git remote -v

git push -f https://github.com/huang-1234/learnFrontTest.git master
