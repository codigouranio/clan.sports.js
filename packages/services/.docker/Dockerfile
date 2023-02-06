FROM node:19 as base

RUN apt-get update && \
    apt-get install -y \
      curl \
      jq \
      git \
      wget \
      openssl \
      bash \
      tar \
      sqlite3 \
      git gcc g++ make python2 python2-dev \
      net-tools && \
    rm -rf /var/lib/apt/lists/* && \
    apt-get clean

RUN npm install -g npm@9.4.1
RUN npm install -g @nestjs/cli@9.0.0
WORKDIR /home/node/app/

FROM base AS dependencies
COPY ./package.json .
COPY ./packages/services/package.json ./packages/services/package.json
RUN npm i --build-from-source --sqlite=$(dirname "$(which sqlite3)") --no-scripts

FROM base as build
COPY . ./
COPY --from=dependencies /home/node/app/node_modules ./node_modules
COPY --from=dependencies /home/node/app/packages/services/node_modules ./packages/services/node_modules
RUN npm run services:build

FROM base AS release
COPY --from=dependencies /home/node/app/node_modules ./node_modules
COPY --from=dependencies /home/node/app/packages/services/node_modules ./packages/services/node_modules
COPY --from=build /home/node/app/packages/services/dist /home/node/app/packages/services/dist
COPY --from=build /home/node/app/packages/services/data /home/node/app/packages/services/data
COPY --from=build /home/node/app/packages/services/.docker /home/node/app/packages/services/.docker
COPY --from=build /home/node/app/packages/services/.env /home/node/app/packages/services/.env

EXPOSE 3001

RUN mv ./packages/services/.docker/docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT [ "docker-entrypoint.sh" ]