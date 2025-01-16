FROM node:22 AS build

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn hook-form build

FROM node:22-slim

WORKDIR /app

COPY --from=build /app/package.json ./
COPY --from=build /app/yarn.lock ./
COPY --from=build /app/.yarnrc.yml ./
COPY --from=build /app/.yarn ./.yarn
COPY --from=build /app/apps/hook-form/.next ./apps/hook-form/.next
COPY --from=build /app/apps/hook-form/public ./apps/hook-form/public

RUN yarn install --production

EXPOSE 3000

CMD ["yarn", "hook-form", "start"]