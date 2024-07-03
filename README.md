# HackMaze (front-end)

[![Codacy Security Scan](https://github.com/Hack-Maze/front-end/actions/workflows/codacy.yml/badge.svg)](https://github.com/Hack-Maze/front-end/actions/workflows/codacy.yml)  [![CodeQL](https://github.com/Hack-Maze/front-end/actions/workflows/codeql.yml/badge.svg)](https://github.com/Hack-Maze/front-end/actions/workflows/codeql.yml)  [![trivy](https://github.com/Hack-Maze/front-end/actions/workflows/trivy.yml/badge.svg)](https://github.com/Hack-Maze/front-end/actions/workflows/trivy.yml)   [![react-CI](https://github.com/Hack-Maze/front-end/actions/workflows/CI.yml/badge.svg)](https://github.com/Hack-Maze/front-end/actions/workflows/CI.yml) 

## Status
In progress


## How to run it Locally
you can run  it using docker compose file
### Prerequisites
1- you must have docker and docker compose installed  and running locally [docker docs](https://docs.docker.com/compose/install/)


2- must have an .env file that looks like this

```
# DB_CREDS
POSTGRES_SERVER=db
POSTGRES_PORT=5432
POSTGRES_DB=app
POSTGRES_USER=postgres
POSTGRES_PASSWORD=changethis

#AZURE STORAGE BLOB TOKEN
AZURE_SAS_TOKEN=

#GITHUB PAT TOKEN
PAT_GITHUB=

#AZURE_CREDS
AZURE_SUBSCRIPTION_ID=
AZURE_TENANT_ID=
AZURE_CLIENT_ID=
AZURE_CLIENT_SECRET=

# PYTHON CONTAINER MANGEMENT SERVICE 
CREATE_CONTAINER_DOMAIN=http://localhost:8080 
```

how to run it 
```
docker compose up -d
```
and brig it down with 
```
docker compose down -v
```

you can change the backend service URL form `/src/assets/config.js`
to change the URL of you configuration 
```
window.VITE_API_URL = "http://localhost:4444/";
```
if you want to use a deffrent version of our frontend image you can choose from available container images in [DockerHub](https://hub.docker.com/repository/docker/mostafaewida/hackmaze_frontend/general)

## Tech Stack
React, TailwindCSS

## Demo Video
[link](https://app.videas.fr/83470945-78ec-436d-b2f2-37ded3a06e2d/)
