This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
This app uses Next.js + React + PostgreSQL + Prisma + Typescript/Javascript + TailwindCSS (Optional)
Before starting, make sure you have nodejs and docker desktop installed 
(has to be this link for docker[https://docs.docker.com/get-started/get-docker/](https://docs.docker.com/get-started/get-docker/))

Inside the prisma folder you will find a schema, that is where we can create our models for data.
The api folder contains the backend data functions
The (pages) folder contains the various pages the website will contain

Steps to run:
```bash
# Step 1: in the location you want it on your computer, run:
git clone https://github.com/UTD-Fall-2024-Sec-6/Group09EcommerceWebsite

# Step 2: open the folder in VSCode
# Manually create a ".env" file
# Copy everything from .env.example over into it, then
# Change one line to: PRISMA_DB_URL="postgresql://commerceelectronics:commerceelectronics@localhost:5432/commerceelectronics"
# Make sure you save changes

# Step 3: open terminal inside vscode, and you should be at \Group09EcommerceWebsite then run:
npm install

# Step 4: with docker open, run:
docker-compose up -d
# then
npx prisma migrate dev
# then for test product info to be put into database,
cd src/utils
# then run
node test.js

# Step 5: now you can run the application
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
