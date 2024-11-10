FROM node:22-alpine AS builder

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:22-alpine AS production

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/yarn.lock ./yarn.lock

RUN yarn install --production --frozen-lockfile

CMD ["yarn", "start"]






