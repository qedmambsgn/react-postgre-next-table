FROM node:latest
WORKDIR /opt/app/server

RUN mkdir -p /opt/app/server
COPY . /opt/app/server/

RUN /opt/app/server/install_deps

EXPOSE 5000
CMD ["/opt/app/server/start"]