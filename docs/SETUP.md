# How to set up your environment

## Prerequisites

You will need:

- npm
- docker
- docker-compose

## Setup Steps

### Step 1

`npm install`

this will install necessary dependencies

WHEN RUNNING PRODUCTION, change .env to .env.prod

when running prisma with required .env, provide via
`dotenv -e <.env file> -- npx prisma <prisma command>`
pretty sure this is because there's more than one dotfile in the main dir
