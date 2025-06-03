const { defineConfig } = require('cypress');
const path = require('path');

// Lê o valor de process.env.ENVIRONMENT passado via GitHub Actions ou localmente
const environment = process.env.ENVIRONMENT || 'dev'; // fallback para dev

// Carrega o config correto dinamicamente
const envConfig = require(`./config-${environment}.js`);

module.exports = defineConfig({
  e2e: {
    ...envConfig
  }
});
