# spgi-next

[Sigma Pi Gamma Iota Chapter website](https://sigmapigammaiota.org), rewritten in Next.js. Please read all of ["To Developers, From Developers"](docs/CONTRIBUTORS.md) before contributing!

This website was made by the Brothers of Sigma Pi at Worcester Polytechnic Institute to advertize and organize our chapter. It is an open-source project under the MIT License, and is currently under active development. Feel free to clone, modify, and distribute our code; we simply request that you give us credit.

If you have questions or concerns, please open an issue on GitHub issues so we can track feature improvements or bugs.

Please email gr-sigmapi@wpi.edu for any non-github related issues or if you're disclosing security vulnerabilities. Include "SPGI-NEXT" in your email subject.

## Our Stack

These are the technologies and dependencies we leverage to make this website run smoothly.

| Web Technology                           | Use Case          |
| ---------------------------------------- | ----------------- |
| [Next.js](https://nextjs.org/)           | Web Framework     |
| [Vercel](https://vercel.com/)            | Web Hosting       |
| [Tailwind CSS](https://tailwindcss.com/) | Styling Framework |
| [Next-Auth](https://next-auth.js.org/)   | Auth Framework    |

| Storage Technology                        | Use Case                    |
| ----------------------------------------- | --------------------------- |
| [Prisma ORM](https://www.prisma.io/)      | Object Relational Mapping   |
| [PostgreSQL](https://www.postgresql.org/) | Database Storage            |
| [S3](https://aws.amazon.com/s3/)          | Object Storage (API)        |
| [Docker](https://www.docker.com/)         | Containerize Storage in Dev |

| Email Technology                            | Use Case           |
| ------------------------------------------- | ------------------ |
| [Nodemailer](https://nodemailer.com/about/) | Dev Email Testing  |
| [SendGrid](https://sendgrid.com/)           | Prod Email Service |

## Directory Structure

| Dir            | Desc                                                                                                                                                                                                                    |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| components/    | React components that are reused **within and across** pages                                                                                                                                                            |
| docs/          | Supporting documentation for developers                                                                                                                                                                                 |
| lib/           | Custom libraries for code that is reused **across** pages                                                                                                                                                               |
| pages/         | Next.js pages for [file based routing](https://nextjs.org/docs/routing/introduction)                                                                                                                                    |
| pages/api      | Next.js [api routes](https://nextjs.org/docs/api-routes/introduction)                                                                                                                                                   |
| pages/public/  | Public site pages, optimized for SEO, using [SSG](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) or [ISR](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration) |
| pages/private/ | Private site pages, optimized for security, using [SSR](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props) or [CSR](https://nextjs.org/docs/basic-features/data-fetching/client-side)          |
| prisma/        | Prisma files (models and migrations)                                                                                                                                                                                    |
| public/        | **Public** staticfiles distributed across the Vercel CDN. **Private/uploaded** files should be stored via S3 and behind authenticated pages                                                                             |
| styles/        | global stylesheets, prefer component styling, see [Tailwind docs](https://tailwindcss.com/docs/reusing-styles) and [STYLE](docs/STYLE.md)                                                                               |
| utils/         | utility functions/methods/classes that aren't part of a full-featured library (stored in lib)                                                                                                                           |
