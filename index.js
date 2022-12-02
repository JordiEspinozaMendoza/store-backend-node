// Declare http
const http = require("http");
// Declare express
const express = require("express");
// Declare cors
const cors = require("cors");
// Db connection
const db = require("./config/database");
// Morgan logger
const morgan = require("morgan");
// PORT is an environment variable or 3000
const PORT = process.env.PORT || 3000;
// Router
const router = require("./server/routes/index");
// Declare app
const app = express();
// Use morgan logger in development
app.use(morgan("dev"));
// Use cors
app.use(cors());
// Use express.json
app.use(express.json());
// Set up router
app.use("/api", router);
// Authenticate db connection
db.authenticate()
  .then(async () => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

// Sync db
db.sync({ force: false }).then(async () => {
  console.log("Database synced...");
  // Start the server
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
});
