/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx')
const withTM = require('next-transpile-modules')(['lit-share-modal-v3'])
const withPlugins = require('next-compose-plugins')

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  reactStrictMode: true,
  swcMinify: true,
}
const plugins = [
  // [withTM] // no go - will fail the nx serve and nx build
  [withNx],
]

module.exports = withTM(withPlugins([...plugins], nextConfig))
