const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()

const withNextEnv = nextEnv()

/** @type {import('next').NextConfig} */
const nextConfig = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    reactStrictMode: true,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      return config
    },
  }
}

module.exports = withNextEnv(nextConfig)
