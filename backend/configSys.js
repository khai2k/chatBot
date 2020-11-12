if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

module.exports = FB_CONFIG = {
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    PAGE_ID: process.env.PAGE_ID,
}
