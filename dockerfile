FROM nginx

LABEL app = "mongo-front"

COPY . /usr/share/nginx/htlm

EXPOSE 80