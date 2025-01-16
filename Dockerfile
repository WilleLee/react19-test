FROM node:22 AS build

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn hook-form build

EXPOSE 3000

CMD ["yarn", "hook-form", "start"]