exports.handler = function(event, context, callback) {
   let id =  0;

   // Enable lambda proxy for this.
   if (event['queryStringParameters'] !== undefined) {
      id = event['queryStringParameters']['id'] || 666;
   }
   console.log(id, param);
   callback(null, 'This thing works. Received ' + id;
   // or
   // callback(403, 'forbidden: you don't have the necessary permissions');
}
