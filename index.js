require("dotenv").config();

const server = require("./server");

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log("BE is running now at port", PORT);
});
