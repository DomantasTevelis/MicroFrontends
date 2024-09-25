import { NextFederationPlugin } from "@module-federation/nextjs-mf";

/**
 * @type {import('next').NextConfig}
 */
export default {
  webpack: (config, options) => {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
            host: `host@http://localhost:3000/_next/static/${
              isServer ? "ssr" : "chunks"
            }/remoteEntry.js`,
          },
        exposes: {
          './Add': './utils/Add.tsx',
          './MultiplyByTwo': './utils/MultiplyByTwo.tsx',
          './product': './pages/product.tsx',
        },
        shared: {
          // shared modules
        },
        extraOptions: {
            exposePages: true
          }
      })
    );
    return config;
  },
};