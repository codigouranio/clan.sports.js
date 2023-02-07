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

WORKDIR /home/node/app/

FROM base AS dependencies
COPY ./package.json /home/node/app/
COPY ./packages/frontend/package.json ./packages/frontend/package.json
RUN npm i

FROM base as build
COPY . ./
COPY --from=dependencies /home/node/app/node_modules ./node_modules
COPY --from=dependencies /home/node/app/packages/frontend/node_modules ./packages/frontend/node_modules

RUN npm run frontend:build

FROM base AS release
COPY --from=dependencies /home/node/app/node_modules ./node_modules
COPY --from=dependencies /home/node/app/packages/frontend/node_modules ./node_modules
COPY --from=build /home/node/app/packages/frontend/public ./public
COPY --from=build /home/node/app/packages/frontend/.next/static ./.next/static
COPY --from=build /home/node/app/packages/frontend/.next/standalone ./
COPY --from=build /home/node/app/packages/frontend/.docker .docker

EXPOSE 3000

RUN mv ./.docker/docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT [ "docker-entrypoint.sh" ]