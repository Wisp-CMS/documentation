import withMarkdoc from '@markdoc/next.js'
import withSearch from './src/markdoc/search.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],

  async redirects() {
    return [
      {
        source: '/:path*', // Match all paths
        destination: 'https://www.wisp.blog/docs', // Redirect to the new site, preserving the path
        permanent: false, // This makes it a temporary redirect (HTTP status code 307)
      },
    ];
  },
};
export default withSearch(
  withMarkdoc({ schemaPath: './src/markdoc' })(nextConfig),
)
