var twilio = require("twilio");

exports.sendMessage = function(from, to, body) {
    // Create a new REST API client to make authenticated requests against the
    // twilio back end
    var client = new twilio.RestClient(
        "AC3bb51f1222cd2ef879cb30d75d4643b2",
        "6917a691a6802ae837ed7fb92b5d9388");

    // Pass in parameters to the REST API using an object literal notation. The
    // REST client will handle authentication and response serialization for you.
    client.sms.messages.create(
        {
            "from": from,
            "to": to,
            "body": body,
        },
        function(error, message) {
            // The HTTP request to Twilio will run asynchronously. This callback
            // function will be called when a response is received from Twilio
            // The "error" variable will contain error information, if any.
            // If the request was successful, this value will be "falsy".
            if (!error) {
                // The second argument to the callback will contain the information
                // sent back by Twilio for the request. In this case, it is the
                // information about the text messsage you just sent:
                console.log("Success! The SID for this SMS message is:", message.sid);
                console.log("Message sent on: ", message.dateCreated);
            } else {
                console.log("Oops! There was an error: ", error);
            }
        });
}
