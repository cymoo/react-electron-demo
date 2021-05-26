const baseConfig = {}

const devConfig = {
  ...baseConfig,
  SERVER_ADDR: 'http://127.0.0.1:5000',
}

const prodConfig = {
  ...baseConfig,
  SERVER_ADDR: 'https://api.daydream.site',
}

let config = null
switch (process.env.NODE_ENV) {
  case 'development':
    config = devConfig
    break
  case 'production':
    config = prodConfig
    break
  default:
    config = prodConfig
}

export default config
