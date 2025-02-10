/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable static exports in production
    output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  
    // Set base path only for GitHub Pages, leave empty if using a custom domain
    // basePath: process.env.NODE_ENV === 'production' ? '/nextathon-template' : '',
    basePath: process.env.NODE_ENV === 'production' ? "" : "",

    // Disable server-based image optimization for static export compatibility
    images: {
      unoptimized: true,
    },
  
    // Set assetPrefix for production if assets are hosted separately
    assetPrefix: process.env.NODE_ENV === 'production' ? 'https://www.batikanor.com/nextathon-template' : '',
  
    // Enable trailing slashes in URLs for correct resolution
    trailingSlash: true,
  };
  
  export default nextConfig;
  
