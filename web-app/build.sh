if [[ "$(docker images -q react-app 2> /dev/null)" == "" ]]; then
  docker build react-app/. -t react-app
fi

DATA_ABSOLUTE_PATH="$(pwd)/$line""data"
DATA_CONFIG_ABSOLUTE_PATH="$(pwd)/$line""data-config"
PUBLIC_ABSOLUTE_PATH="$(pwd)/$line""nginx/source"

cp react-app/app/index.html nginx/source

docker run --rm --memory-reservation="8g" \
--mount type=bind,source=$DATA_ABSOLUTE_PATH,target=/home/app/src/data \
--mount type=bind,source=$DATA_CONFIG_ABSOLUTE_PATH,target=/home/app/src/data-config \
--mount type=bind,source=$PUBLIC_ABSOLUTE_PATH,target=/home/app/public \
--env NODE_OPTIONS=--max_old_space_size=7168 \
react-app npm run build