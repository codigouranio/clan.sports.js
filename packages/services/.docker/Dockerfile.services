FROM node:19-alpine as base

RUN apk update && apk upgrade
RUN apk add --no-cache \ 
  make gcc g++ py3-pip python3 \
  python3-dev git gyp sqlite
# RUN pip3 install --upgrade pip
RUN npm install -g npm@9.4.1
# RUN npm install -g @nestjs/cli@9.0.0

WORKDIR /home/node/app/

FROM base AS dependencies
COPY ./packages/services/package.json .
RUN npm i --no-scripts --sqlite=/usr/local

FROM base as build
COPY ./packages/services .
COPY --from=dependencies /home/node/app/node_modules/ ./node_modules
RUN npm run build

FROM base AS release
COPY --from=dependencies /home/node/app/node_modules/ ./node_modules
COPY --from=build /home/node/app/dist/ /home/node/app/dist
COPY --from=build /home/node/app/data/ /home/node/app/data
COPY --from=build /home/node/app/.docker/ /home/node/app/.docker
COPY --from=build /home/node/app/.env /home/node/app

EXPOSE 3001

RUN mv ./.docker/docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT [ "docker-entrypoint.sh" ]