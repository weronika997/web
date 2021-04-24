if [[ "$(docker images -q react-app 2> /dev/null)" == "" ]]; then
  docker build react-app/. -t react-app
fi

DATA_ABSOLUTE_PATH="$(pwd)/$line""data"
PUBLIC_ABSOLUTE_PATH="$(pwd)/$line""nginx/source"

cp react-app/app/index.html nginx/source

docker run --rm \
--mount type=bind,source=$DATA_ABSOLUTE_PATH,target=/home/app/src/data \
--mount type=bind,source=$PUBLIC_ABSOLUTE_PATH,target=/home/app/public \
react-app npm run build