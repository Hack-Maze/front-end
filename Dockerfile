FROM node:18-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencieshttps://github.com/Hack-Maze/front-end/blob/develop/Dockerfile
COPY package.json .
COPY package-lock.json .
RUN npm ci
# Copy app files
COPY . .
# Expose port
EXPOSE 5173
# Start the app
CMD [ "npm", "start" ]
