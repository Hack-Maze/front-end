FROM node:18-alpine AS builder
# Add a work directory
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent 
# Copy app files
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx","-g","daemon off;"]
