const { defineConfig } = require('cypress');
const path = require('path');

// Lê o valor de process.env.ENVIRONMENT passado via GitHub Actions ou localmente
const environment = process.env.ENVIRONMENT || 'dev'; // fallback para dev

// Carrega o config correto dinamicamente
const envConfig = require(`./config-${environment}.js`);

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml'
    },
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: 'Relatório de testes',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false
    }
  },
  chromeWebSecurity: false,
  video: true,
  e2e: {
    ...envConfig,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // você pode adicionar outros plugins ou listeners aqui
    }
  }
});
