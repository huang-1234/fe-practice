echo "git start"
# 检查是否存在 git 仓库
if [ ! -d ".git" ]; then
  echo "当前目录不是一个 git 仓库"
  exit 1
fi

# 读取当前分支名
branch=$(git branch | grep '* ' | awk '{print $2}')
echo "当前分支名: $branch"

# git ci
ciAction="feat: "
ciMessage="init algorithm-visualizer"
git add .

git ci -m "$ciAction $ciMessage"
git push origin $branch

echo "git end"

# kmi publish
laneIdDefault=""
laneId=""

# 读取命令行
s1=$1
s2=$2
s3=$3
s4=$4

# lane
if [[ -z $s2 ]]; then
  laneId=$laneIdDefault
  echo "not laneId can be read from Command line, use laneIdDefault, that is $laneIdDefault"
else
  laneId=$s2
  echo "read laneId form Command line, that is $laneId"
fi