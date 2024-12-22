FROM nginx:latest

WORKDIR /app

RUN apt-get update
RUN apt-get install vim -y

EXPOSE 80

COPY html/ /usr/share/nginx/html

# docker build -t mathmore0000/nginx-full-cycle:latest .
# docker run -p 80:80 -it mathmore0000/nginx-com-vim