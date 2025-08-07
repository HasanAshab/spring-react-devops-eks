FROM node:18 AS base

# set work directory
WORKDIR /app

# install dependencies
COPY package*.json .
RUN npm i

# copy source
COPY . .

# expose port
EXPOSE 4200


FROM base AS dev

# run app
ENTRYPOINT [ "npm", "start" ]


FROM base AS build

# build app
RUN npm run build


FROM nginx:1.23.2-alpine AS prod

# copy nginx config
COPY /.nginx/nginx.conf /etc/nginx/conf.d/default.conf

# remove default stuff
RUN rm -rf /usr/share/nginx/html/*

# copy build
COPY --from=build /app/build /usr/share/nginx/html

# run nginx as non-root user
RUN touch /var/run/nginx.pid
RUN chown -R 1001:1001 /var/run/nginx.pid /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d
USER 1001

# run the app
ENTRYPOINT ["nginx", "-g", "daemon off;"]
 