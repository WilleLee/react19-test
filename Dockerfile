FROM node:22 as builder

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn hook-form build

CMD ["yarn", "start"]