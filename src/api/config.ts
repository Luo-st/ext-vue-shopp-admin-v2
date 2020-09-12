let BASE_URL = ''
let APPLET_URL = ''
let THIRD_PARTY_URL = ''
let DOCS_URL = ''

const env = process.env.NODE_ENV
if (env === 'local') {
  BASE_URL = 'https://api.jinshangtf.com'
  APPLET_URL = 'https://dev.app-applet.pincll.net'
  THIRD_PARTY_URL = 'https://dev.app-third-party.pincll.net'
  DOCS_URL = 'https://dev.help.pincll.net'
} else if (env === 'development') {
  BASE_URL = 'https://api.jinshangtf.com'
  APPLET_URL = 'https://dev.app-applet.pincll.net'
  THIRD_PARTY_URL = 'https://dev.app-third-party.pincll.net'
  DOCS_URL = 'https://dev.help.pincll.net'
} else if (env === 'production') {
  BASE_URL = 'https://api.jinshangtf.com'
  APPLET_URL = 'https://app-applet.pincll.com'
  THIRD_PARTY_URL = 'https://app-third-party.pincll.com'
  DOCS_URL = 'https://help.pincll.com'
}

const V1 = 'v1'
const SHOP = 'shop'
const COMMON = 'common'

export { BASE_URL, APPLET_URL, V1, SHOP, COMMON, THIRD_PARTY_URL, DOCS_URL }
