require("dotenv").config({ path: "./config/.env" });


const http = require("http");
const app = require("./app");

app.set("port", process.env.PORT);

http.createServer(app).listen(process.env.PORT, () => {
  console.log("Server listen on PORT : " + process.env.PORT);
  console.log("----- Welcome -----");
});
