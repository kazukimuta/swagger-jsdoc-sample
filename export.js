(async () => {
    const swaggerJsdoc = await import('swagger-jsdoc')
    const swaggerDefinition = {
      openapi: '3.0.0',
      info: {
        title: 'Hello World', // Title (required)
        version: '1.0.0', // Version (required)
        description: 'A sample API', // Description (optional)
      },
    };
    // Options for the swagger docs
    const options = {
      swaggerDefinition,
      apis: ['src/constollers/*.js', 'src/constollers/*/*.js'],
    };
    const spec = await swaggerJsdoc.default(options)
    console.log(JSON.stringify(spec, null, '\t'))
  })()