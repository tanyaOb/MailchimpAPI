var mailchimp = require('mailchimp-v3');
mailchimp.setApiKey('64ad0c27f5fd42b6e7b55b97585634ee-us14');

  mailchimp
  .post('campaigns/bd84d52599/actions/send').then(function(result){
    console.log(result);
  })
  .catch(function(error){
    console.log(error);
  });
