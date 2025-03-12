# base node image

FROM node:22-bullseye-slim AS base
RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y curl

# set for base and all layer that inherit from it

ENV NODE_ENV=production

# Install all node_modules, including dev dependencies

FROM base AS deps

WORKDIR /myapp

ADD package.json .npmrc ./
RUN npm install --include=dev

# Setup production node_modules

FROM base AS production-deps

WORKDIR /myapp

COPY --from=deps /myapp/node_modules /myapp/node_modules
ADD package.json .npmrc ./
RUN npm prune --omit=dev

# Build the app

FROM base AS build

WORKDIR /myapp

COPY --from=deps /myapp/node_modules /myapp/node_modules

ADD . .
RUN npm run build

# Finally, build the production image with minimal footprint

FROM base

WORKDIR /myapp

COPY --from=production-deps /myapp/node_modules /myapp/node_modules

COPY --from=build /myapp/build /myapp/build
COPY --from=build /myapp/public /myapp/public
ADD . .

EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl -f http://127.0.0.1:3000/health || exit 1
ENTRYPOINT ["npm", "start"]
