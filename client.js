const { HelloRequest } = require("./helloworld_pb.js");
const { GreeterClient } = require("./helloworld_grpc_web_pb.js");

// change with the NGINX url
// keep localhost for local testing
const NginxURL = "http://localhost";

var client = new GreeterClient(NginxURL + "/api");

var request = new HelloRequest();
request.setName("World");

client.sayHello(request, {}, (err, response) => {
  document.getElementById("response").innerText = response.getMessage();
});
