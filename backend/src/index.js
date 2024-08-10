const { app } = require("./server.js");
const databaseConnect = require("./utilities/database.js");


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server has started successfully on: ${PORT}`);
  databaseConnect();
});
