FROM nginx

LABEL app = "mongo-front"

COPY . /usr/share/nginx/html

EXPOSE 80