FROM node:latest
WORKDIR /opt/app/client

RUN mkdir -p /opt/app/client
COPY . /opt/app/client/

RUN /opt/app/client/install_deps

EXPOSE 3000
CMD ["/opt/app/client/start"]