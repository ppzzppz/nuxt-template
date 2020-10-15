FROM repo.corp.matrx.team/matrx-docker/base/web/nginx:v2
COPY  conf.d/ /etc/nginx/conf.d/
#COPY dist/ /usr/share/nginx/html
COPY dist/ /data/www/
