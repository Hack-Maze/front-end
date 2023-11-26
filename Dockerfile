FROM node:18-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencieshttps://github.com/Hack-Maze/front-end/blob/develop/Dockerfile
COPY package.json .
COPY package-lock.json .
RUN npm install
# Copy app files
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=development /app/build /usr/share/nginx.html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]

