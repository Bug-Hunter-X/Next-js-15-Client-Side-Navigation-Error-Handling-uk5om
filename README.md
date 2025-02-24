# Next.js 15 Client-Side Navigation Error Handling

This repository demonstrates a bug in Next.js 15 related to client-side navigation and error handling. When a component on a client-side navigated page throws an error during rendering, Next.js 15 doesn't handle it gracefully, leading to an unexpected user experience.  This example shows how to reproduce the problem and provides a solution.

## Steps to Reproduce
1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to the `/` page.
5. Click the link to go to the `/about` page.

You should see an error in your browser's console.

## Solution
The solution involves using appropriate error boundaries to catch and handle errors within components.  The solution file provides the corrected implementation.