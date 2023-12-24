#!/bin/sh
envsubst '$BACKEND_HOST' < /etc/nginx/conf.d/custom-nginx.conf > /etc/nginx/conf.d/default.conf;
exec nginx -g "daemon off;";
