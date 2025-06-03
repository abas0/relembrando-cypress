const { defineConfig } = require('cypress');
const baseConfig = require('./cypress.config'); //importando as configurações base 
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
    path: path.resolve(__dirname, './.env.dev')
})

const e2e = {
    baseUrl : process.env.BASE_URL, //baseUrl muda de servidor para servidor
    env:{
        username: process.env.USER,
        password: process.env.PASSWORD
    }
}

module.exports = defineConfig({
    ...baseConfig, //copiando as configurações base
    e2e
})