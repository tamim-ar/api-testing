const newman = require('newman');
require('dotenv').config();

newman.run({
  
  // collection: 'https://api.postman.com/collections/44392319-b523db42-fc1f-43cb-83b0-74ad89aaf4b4?access_key=' + process.env.PMAT_KEY,

  // collection:require('./collection/DMoneyTransactionB16.json'),

  reporters: 'htmlextra',
  iterationCount: 1,
  reporter: {
    htmlextra: {
      export: './Reports/report.html',
    },
  },
}, function (err) {
  if (err) { throw err; }
  console.log('Collection run complete!');
});
