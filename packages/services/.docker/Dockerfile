ARG NODE_VERSION=14.17-alpine
FROM node:${NODE_VERSION} as base

COPY .docker/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
WORKDIR /home/node/app/

FROM base AS dependencies
RUN apk add --update build-base python
COPY ./package.json /home/node/app/
RUN npm i

FROM base AS release
COPY --from=dependencies /home/node/app/node_modules ./node_modules
COPY ./.env ./.env
COPY ./dist ./dist

ENTRYPOINT [ "docker-entrypoint.sh" ]