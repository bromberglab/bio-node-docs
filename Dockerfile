FROM alpine:3

ENV APP_DIR=/app

RUN mkdir $APP_DIR
RUN mkdir $APP_DIR/dist
WORKDIR $APP_DIR

ADD docs/.vuepress/dist $APP_DIR/dist

ENTRYPOINT [ "sh", "-c", "mkdir /volume/dist; rm -rf /volume/dist/docs; cp -r $APP_DIR/dist /volume/dist/docs" ]
