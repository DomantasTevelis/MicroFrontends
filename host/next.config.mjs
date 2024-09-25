import { NextFederationPlugin } from "@module-federation/nextjs-mf";

export function webpack(config, options) {
  const { isServer } = options;
  config.plugins.push(
    new NextFederationPlugin({
      name: "host",
      filename: "static/chunks/remoteEntry.js",
      remotes: {
        remote: `remote@http://localhost:3001/_next/static/${
          isServer ? "ssr" : "chunks"
        }/remoteEntry.js`,
      },
      exposes: {
        "./nav": "./components/Nav.tsx",
        "./footer": "./components/Footer.tsx",
      },
      initOptions: {
        shareStrategy: 'loaded-first',
      },
    })
  );
  return config;
}