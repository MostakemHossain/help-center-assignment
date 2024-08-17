import app from "./app";
import config from "./app/config";
const port = 8500;

async function main() {
  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });
}

main();
