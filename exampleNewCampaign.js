var mailchimp = require('mailchimp-v3');
mailchimp.setApiKey('64ad0c27f5fd42b6e7b55b97585634ee-us14');

mailchimp
  .post('campaigns', {
    type       : 'regular',
    recipients : {
    list_id    : 'b2a5ac5874'
    },
    settings   : {
      subject_line : 'New campaign',
      from_name    : 'Tanya',
      reply_to     : 'obel.tet@gmail.com'
    }
  })
  .then(function(result){
    console.log(result);
  })
  .catch(function(error){
    console.log(error);
  });
