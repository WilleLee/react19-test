FROM node:22

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn hook-form build

EXPOSE 3000

CMD ["yarn", "hook-form", "start"]