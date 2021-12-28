FROM node:14.17.0-alpine as builder

WORKDIR /app
COPY ./package.json .
RUN npm install || exit 1

COPY . .
RUN npm run build || exit 1

FROM nginx:alpine
EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
