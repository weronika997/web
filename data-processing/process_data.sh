if [[ "$(docker images -q data-processing 2> /dev/null)" == "" ]]; then
  docker build . -t data-processing
fi

DATA_ABSOLUTE_PATH="$(pwd)/$line""data"
SCRIPTS_ABSOLUTE_PATH="$(pwd)/$line""scripts"

SCENARIO_NAME=$1

echo "Processing genet standard output..."
docker run --rm --cpus="7.5" --memory-reservation="8g" \
--mount type=bind,source=$DATA_ABSOLUTE_PATH,target=/home/data-processing/data \
--mount type=bind,source=$SCRIPTS_ABSOLUTE_PATH,target=/home/data-processing/scripts \
data-processing python scripts/genet_standard_output.py \
/home/data-processing/data $1 \

echo "Processing custom output..."
docker run --rm --cpus="7.5" --memory-reservation="8g" \
--mount type=bind,source=$DATA_ABSOLUTE_PATH,target=/home/data-processing/data \
--mount type=bind,source=$SCRIPTS_ABSOLUTE_PATH,target=/home/data-processing/scripts \
data-processing python scripts/custom_vis.py \
/home/data-processing/data $1 \
