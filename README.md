This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Test Description

Please fork this repository and develop a real estate property search feature using Next.js, MySQL, and GraphQL in your own repository. Include a Docker Compose configuration for Next.js and instructions to generate fake data. This test aims to assess your critical thinking and technical skills, so a complete git log showing all work done is important.

**User Story:**  

**As a Developer**, I want to build a search feature for real estate properties, allowing users to filter properties based on sale or rent, price range, number of bedrooms, and area. The search should handle a large number of fake properties (10,000, 100,000, and 1,000,000) to test query performance. Additionally, the listing page should display the project name, short title, price, bedroom count, area, short description, and an image gallery (with 5 images) that works with mouse interaction on PCs and swipe gestures on mobile devices. The page should achieve a score of 95 or higher on Google Insight.

**Acceptance Criteria:**

**Given** a user searches for properties,  
**When** they select the filter type for sale or rent,  
**Then** the search should display properties matching the selected type.  

**Given** a user searches for properties,  
**When** they specify the price range using the filter,  
**Then** the search should display properties within the specified price range for both sale and rent.  

**Given** a user searches for properties,  
**When** they filter properties based on the number of bedrooms,  
**Then** the search should display properties with the corresponding bedroom count.  

**Given** a user searches for properties,  
**When** they filter properties based on the area,  
**Then** the search should display properties within the specified area range.  

**Given** a user views the listing page,  
**When** they interact with the image gallery on a PC (using a mouse),  
**Then** they should be able to navigate between images.  

**Given** a user views the listing page,  
**When** they interact with the image gallery on a mobile device (using swipe gestures),  
**Then** they should be able to navigate between images.

**Given** the listing page,  
**When** tested with Google Insight,  
**Then** the page should achieve a score of 95 or higher.  

**Given** a large number of fake properties (10,000, 100,000, and 1,000,000),  
**When** the search is performed,  
**Then** the query performance should meet acceptable performance benchmarks.  

## Commands

```bash 
    $docker-compose up --build -d
```

GraphQL Localhost
    
```bash 
    $nodemon index
```

Install dependencies for each project
Frontend
```bash
    $cd ./frontend
    $npm i
```

Backend
```bash
    $cd ./backend
    $npm i
``` 



