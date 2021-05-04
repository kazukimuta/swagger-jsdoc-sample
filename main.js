const app = require("express")();
const swaggerUI = require("swagger-ui-express");

const isExport = process.argv[2] === "export";

async function run() {
  const swaggerJsdoc = await import("swagger-jsdoc");
  const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
      title: "swagger-jsdocでのOAI出力サンプル", // Title (required)
      version: "1.0.0", // Version (required)
      description: "A sample API", // Description (optional)
      contact: {
        name: "support",
        url: "htttp://exmaple.com/support",
      },
    },
    serve: [{ url: "http://localhost:10001", description: "API test" }],
  };
  // Options for the swagger docs
  const options = {
    swaggerDefinition,
    apis: ["src/constollers/**/*.js", "src/constollers/**/*.yaml"],
  };
  const spec = await swaggerJsdoc.default(options);

  if (isExport) {
    console.log(JSON.stringify(spec, null, "\t"));
  } else {
    app.use(swaggerUI.serve, swaggerUI.setup(spec));
    app.listen(8080, () => console.log("running"));
  }
}
run();
