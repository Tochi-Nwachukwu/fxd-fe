# FlexxyDrive Frontend

![FlexxyDrive Logo](https://flexxydrive.com/logo2.svg)

## Overview

FlexxyDrive is a next-generation ride-hailing platform focused on affordability, sustainability, and community-driven mobility. The platform offers flexible ride options, including carpooling, private rides, and scheduled trips, providing eco-friendly and cost-effective transportation solutions.

This repository contains the frontend of the FlexxyDrive platform, built with Next.js and designed for seamless user experience across web and mobile devices.


<p align="center">
  <img src="https://miro.medium.com/v2/resize:fit:1200/0*bEOtfBmYyH9TJits.png" alt="FlexxyDrive Logo" width="300"/>
  <img src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x309-yynfidez.png" alt="Next.js Logo" width="300"/>
</p>

## Features

- User-friendly interface for booking and managing rides.
- Carpooling & Private Ride Options – Choose from Flex, Flex Plus, or Flex Prime.
- Real-time updates on ride availability and pricing.
- Secure authentication and user profile management.
- Integration with backend APIs for seamless ride booking and payment processing.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later)
- [Yarn](https://yarnpkg.com/) or npm

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/flexxidrive/frontend.git
   cd frontend
   ```

2. Install dependencies:
   ```sh
   yarn install  # or npm install
   ```

## Environment Configuration

Create a `.env.local` file in the root directory and add the required environment variables:

```env
NEXT_PUBLIC_API_BASE_URL=https://api.flexxidrive.com
NEXT_PUBLIC_AUTH_URL=https://auth.flexxidrive.com
NEXT_PUBLIC_STORAGE_BUCKET=s3://flexxidrive-bucket
```

## Running the Development Server

Start the Next.js development server:

```sh
yarn dev  # or npm run dev
```

Access the app at `http://localhost:3000`.

## Building for Production

Build the optimized production version:

```sh
yarn build  # or npm run build
```

Start the production server:

```sh
yarn start  # or npm start
```

## Deployment

FlexxiDrive's frontend can be deployed using Vercel, AWS Amplify, or any cloud hosting service supporting Next.js.

Example Vercel Deployment:

```sh
vercel deploy
```

## Contribution Guidelines

1. Fork the repository.
2. Create a new feature branch.
3. Commit and push your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License.
