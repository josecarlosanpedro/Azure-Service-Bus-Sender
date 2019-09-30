var azure = require('azure');
var serviceBusService = azure.createServiceBusService("ServiceBusConnectionString");

//create topic
serviceBusService.createTopicIfNotExists('test', function (error) {
  if (!error) {
    // topic was created or exists
    console.log('topic created or exists.');
  }
});

//create subscription
serviceBusService.createSubscription('test', 'service-bus-subscription-names', function (error) {
  if (!error) {
    console.log("sads")
    // subscription created
  }
  console.log(error)
});

//send topic message
serviceBusService.sendTopicMessage("test", "service-bus-subscription-name", function (error) {
  if (error) {
    console.log(error);
  }
});
