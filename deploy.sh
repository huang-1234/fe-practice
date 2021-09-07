set -e


git add .
git commit -m 'update styles'

git remote -v

git push -f https://github.com/huang-1234/learnFrontTest.git master
