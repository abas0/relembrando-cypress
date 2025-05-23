const { defineConfig } = require('cypress');
const baseConfig = require('./cypress.config');

const e2e = {
    baseUrl : process.env.BASE_URL,
    env:{
        username: 'QA_sauce',
        password: 'QA_secret'
    }
}

module.exports = defineConfig({
    ...baseConfig, //copiando as configurações base
    e2e
})