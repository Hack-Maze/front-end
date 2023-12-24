FROM node:18-alpine AS builder
# Add a work directory
WORKDIR /app
# Cache and Install dependencieshttps://github.com/Hack-Maze/front-end/blob/develop/Dockerfile
COPY package.json /app
COPY package-lock.json /app
RUN npm install
# Copy app files
COPY . /app
RUN npm run build


FROM nginx:alpine
WORKDIR /usr/local/bin
COPY --from=builder /app/dist /usr/share/nginx/html
COPY generate-config.sh .
RUN source .env
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN chmod +x generate-config.sh
EXPOSE 80
ENTRYPOINT [ "/bin/sh", "generate-config.sh"]

