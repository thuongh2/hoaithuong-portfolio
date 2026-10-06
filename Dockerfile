# Build the static React app, then serve it from an unprivileged Nginx image.
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
COPY .npmrc ./
RUN npm ci
COPY public ./public
COPY src ./src
COPY postcss.config.js tailwind.config.js ./
RUN npm run build

FROM nginxinc/nginx-unprivileged:1.27-alpine AS production
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 8080
