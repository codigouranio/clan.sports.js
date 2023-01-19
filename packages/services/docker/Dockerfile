# syntax=docker/dockerfile:experimental
# Stage "base": build main docker environment for any node.js application
ARG NODE_VERSION=14.17-alpine
FROM node:${NODE_VERSION} as base

# Install your global runtime dependencies here that are required for service to operate
# Example: RUN apk add --update g++ make

COPY docker/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
WORKDIR /home/node/app/

# Stage "build": Install your build dependencies here (e.g those that are required only at a build time when doing npm install)
FROM base AS build
RUN apk add --update build-base python

# Stage "dependencies": Build node_modules and put it into stage docker layer cache
FROM build AS dependencies
COPY package.json package-lock.json /home/node/app/
RUN npm ci

# Stage "release": Copy node_modules and from docker layer cache and update application source code
FROM base AS release
COPY --from=dependencies /home/node/app/node_modules ./node_modules
COPY . /home/node/app/

RUN npm run build

ENTRYPOINT [ "docker-entrypoint.sh" ]