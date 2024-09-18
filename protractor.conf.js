exports.config = {

    allScriptsTimeout: 120000,

    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    baseUrl: 'https://jsonplaceholder.typicode.com/',
    capabilities: {
        browserName: 'chrome'
    },
    framework: 'mocha',
    specs: [
        './test/specs/**/*.js'
    ],
    logLevel: 'INFO',
    mochaOpts: {
        bail: true,
        colors: true,
        compilers: ,
        reporter: 'mochawesome',
        reporterOptions: {
            reportDir: './reports',
            reportFileName: 'protractor_mocha_report',
            enableCharts: true
        },
        timeout: 30000,
        ui: "bdd",
    },

};
/*
====================================================================
For full list of Protractor config options,
see- https://github.com/angular/protractor/blob/master/lib/config.ts
====================================================================
**/