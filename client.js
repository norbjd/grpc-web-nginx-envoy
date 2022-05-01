const { HelloRequest } = require("./helloworld_pb.js");
const { GreeterClient } = require("./helloworld_grpc_web_pb.js");

// change with the Envoy url
// keep localhost for local testing
const EnvoyURL = "http://localhost:8000";

var client = new GreeterClient(EnvoyURL);

var request = new HelloRequest();
request.setName("World");

client.sayHello(request, {}, (err, response) => {
  document.getElementById("response").innerText = response.getMessage();
});
