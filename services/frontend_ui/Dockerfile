FROM node:12-alpine as build

WORKDIR /app
COPY ./frontend_ui/package.json ./frontend_ui/package-lock.json ./
RUN npm install
#RUN mv ./node_modules ./app
COPY ./frontend_ui .
RUN npm install -g @angular/cli
RUN ng build --configuration production --output-path=/dist
#RUN npm run ng build -- --deploy-url=/dict --prod

FROM nginx:alpine
RUN cat /etc/nginx/nginx.conf
RUN ls /etc/nginx/conf.d/
RUN cat /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*
#COPY --from=builder /dist /usr/share/nginx/html
COPY --from=build /dist /usr/share/nginx/html

EXPOSE 4200 80
#ENTRYPOINT ["nginx", "-g", "daemon off;"]
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
