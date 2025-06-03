const { defineConfig } = require('cypress');
const baseConfig = require('./cypress.config'); //importando as configurações base 
const dotenv = require('dotenv')
const path = require('path')

// dotenv.config({
//     path: path.resolve(__dirname, './.env.dev')
// })

if (process.env.CI !== 'true') {
  dotenv.config({ path: path.resolve(__dirname, './.env.dev') });
}

console.log('CI:', process.env.CI);
console.log('BASE_URL:', process.env.BASE_URL);

if (!process.env.BASE_URL) {
  throw new Error('❌ BASE_URL não definida!');
}

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    env: {
      username: process.env.USER,
      password: process.env.PASSWORD,
    },
    setupNodeEvents(on, config) {
      return config;
    },
  },
});