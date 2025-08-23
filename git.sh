echo "git start"
# 检查是否存在 git 仓库
if [ ! -d ".git" ]; then
  echo "当前目录不是一个 git 仓库"
  exit 1
fi

# 读取当前分支名
branch=$(git branch | grep '* ' | awk '{print $2}')
echo "当前分支名: $branch"


# kmi publish
laneIdDefault=""
laneId=""

# 读取命令行
# s1: ci
# s2: ciMessage
# s3: laneId
# s4: laneIdDefault
s1=$1
s2=$2
s3=$3
s4=$4

if [[ $s1 == "ci" ]]; then
  # git ci
  ciAction="feat: "
  ciMessage=$s2
  echo "ciMessage is $ciMessage"
  git add .
  git ci -m "$ciAction $ciMessage"
  git push origin $branch
fi

# lane
if [[ -z $s3 ]]; then
  laneId=$laneIdDefault
  echo "not laneId can be read from Command line, use laneIdDefault, that is $laneIdDefault"
else
  laneId=$s3
  echo "read laneId form Command line, that is $laneId"
fi