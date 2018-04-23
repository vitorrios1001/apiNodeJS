global.SALT_KEY = '5aa93bc125867b2329131fa4';
global.EMAIL_TMPL = 'Olá, <strong>{0}</strong> seja bem vindo ao Node Storage';
const keys = require('./keys');

module.exports = {
    connectionString: process.env.CONNECTIONSTRING || keys.connectionString,
    sendgridKey: process.env.SENDGRIDKEY || keys.sendgridKey,
    containerConnectionString: 'TDB',
    // configFirebase: {
    //     apiKey: keys.keysFirebase.apiKey,
    //     authDomain: keys.keysFirebase.authDomain,
    //     databaseURL: keys.keysFirebase.databaseURL,
    //     projectId: keys.keysFirebase.projectId,
    //     storageBucket: keys.keysFirebase.projectId,
    //     messagingSenderId: keys.keysFirebase.messagingSenderId
    // }
}


