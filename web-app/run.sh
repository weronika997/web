docker build nginx/. -t kepler-nginx
docker run -p 8080:80 kepler-nginx