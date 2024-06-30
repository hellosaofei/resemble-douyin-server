set -e
info="$1"

git add .
git commit -m "${info}"
git push github master

exec /bin/bash