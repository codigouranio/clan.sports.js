ARG NODE_VERSION=19
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

COPY ./.docker/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
WORKDIR /home/node/app/

FROM base AS dependencies
COPY ./package.json /home/node/app/
RUN npm i --build-from-source --sqlite=$(dirname "$(which sqlite3)")

FROM base as build
COPY --from=dependencies /home/node/app/node_modules ./node_modules
COPY . ./
RUN npm run build

FROM base AS release
COPY --from=dependencies /home/node/app/node_modules ./node_modules
COPY --from=build /home/node/app/dist ./dist
COPY --from=build /home/node/app/data ./data
COPY ./.env ./.env

EXPOSE 3001
ENTRYPOINT [ "docker-entrypoint.sh" ]