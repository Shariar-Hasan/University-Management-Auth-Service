import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";

const port = process.env.PORT || 3000;
async function main() {
  try {
    await mongoose.connect(config.databaseUrl as string);
    console.log("🗄️ database Connected Successfully");
    // app connection
    app.listen(port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log("Database Connecttion Error", err);
  }
}

main();
