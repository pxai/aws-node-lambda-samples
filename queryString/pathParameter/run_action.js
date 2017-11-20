exports.handler = function(event, context, callback) {
   let id =  0;
   let param = 666;
   
   if (event['pathParameters'] !== undefined) {
       id = event['pathParameters']['id'] || 0;
   }

   if (event["queryStringParameters"] !== undefined) {
      param = event["queryStringParameters"]['param'] || 666;
   }
   console.log(id, param);
   callback(null, "This thing works. Received " + id + " and " + param);
   // or
   // callback(403, "forbidden: you don't have the necessary permissions");
}

exports.myHandler = function(event, context, callback) {
   console.log("value1 = " + event.key1);
   console.log("value2 = " + event.key2);
   callback(null, "This thing works");
   // or
   // callback(403, "forbidden: you don't have the necessary permissions");
}
