FROM node:16-alpine as base

RUN apk update && apk upgrade

WORKDIR /home/node/app/

FROM base AS dependencies
COPY ./packages/frontend/package.json .
RUN npm i --no-scripts

FROM base as build
COPY ./packages/frontend .
COPY --from=dependencies /home/node/app/node_modules ./node_modules
RUN npm run build

FROM base AS release
COPY --from=dependencies /home/node/app/node_modules ./node_modules
COPY --from=build /home/node/app/public ./public
COPY --from=build /home/node/app/.next/static ./.next/static
COPY --from=build /home/node/app/.next/standalone ./
COPY --from=build /home/node/app/.docker .docker

EXPOSE 3000

RUN mv ./.docker/docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT [ "docker-entrypoint.sh" ]