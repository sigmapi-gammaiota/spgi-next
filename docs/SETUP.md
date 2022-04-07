# How to set up your environment

The first and most obvious step is to clone the repo to your local machine. Use whatever method you prefer, as long as you have read/write access to the repository. For the simplest method of getting started, use GitHub desktop to clone the repo locally.

## Prerequisites

Please read this section completely before starting on installation.

For those on Windows, please install WSL before continuing.

We assume most developers will be using a Debian-based distro if using WSL or native Linux. Therefore we will assume `apt` is your package manager. If this is not the case, replace with your package manager of choice

For Mac users, Homebrew is assumed.

### NPM

Using your package manager, install `nodejs` and `npm`

These are required for Next.js and installing related dependencies

### Docker

Install Docker Desktop for the most straightforward user experience. This integrates natively for Unix systems and will be compatible with WSL setups.

### Docker-compose

Using your package manager, install docker-compose. You will need this for the development services like the PostgreSQL database and S3 server.

## Setup Steps

### Step 1

`npm install`

this will install necessary dependencies

### Step 2

Start your docker containers using docker-compose. Please run:

`docker-compose up`

This will pull the images and generate related files. See further documentation on what these files are used for.

If you wish to run this detached (meaning not in the current terminal window), use `docker-compose up -d` to run the development services in the background.

To stop these services, run `docker-compose stop`. This does not remove the containers, only stops the processes. If you wish to remove them, use `down` instead of `stop`

To resume services, use `docker-compose start`

If you wish to reset the volumes, run `docker-compose down -v && docker-compose up`


##### Basic overview

install prerequisites (wsl, nodejs 12+, npm, docker, docker-compose)
npm run dev (run webserver)
docker-compose up (runs docker services, only postgres for now)
email setup with ethereal.email

##### Extra
WHEN RUNNING PRODUCTION, change .env.example to .env.prod

when running prisma with required .env, provide via
`dotenv -e <.env file> -- npx prisma <prisma command>`
pretty sure this is because there's more than one dotfile in the main dir
