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

COPY ./.docker/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
WORKDIR /home/node/app/

FROM base AS dependencies
COPY ./package.json /home/node/app/
RUN npm i

FROM base as build
COPY --from=dependencies /home/node/app/node_modules ./node_modules
COPY . ./
RUN npm run build

FROM base AS release
COPY --from=dependencies /home/node/app/node_modules ./node_modules
COPY --from=build /home/node/app/.next/standalone ./
COPY --from=build /home/node/app/.next/static ./.next/static
COPY --from=build /home/node/app/public ./public

EXPOSE 3000
ENTRYPOINT [ "docker-entrypoint.sh" ]