const express = require("express");
const controllers = require("../app/controllers");

const YAML = require('yamljs');
const swaggerDocument = YAML.load('./openapi.yaml');
const redoc = require('redoc-express');

const apiRouter = express.Router();

/**
 * TODO: Implement your own API
 *       implementations
 */

// CRUD for Cars
apiRouter.get("/cars", controllers.api.v1.postController.listCar);
apiRouter.post("/cars/add", controllers.api.v1.postController.addCar);
apiRouter.post("/cars/update/:id", controllers.api.v1.postController.updateById);
apiRouter.get("/cars/delete/:id", controllers.api.v1.postController.deleteById);
apiRouter.get("/cars/:id", controllers.api.v1.postController.getById);

// Member
// apiRouter.get("/register", controllers.api.v1.userController.registerForm);
// apiRouter.get("/login", controllers.api.v1.userController.loginForm);
apiRouter.post("/member/register", controllers.api.v1.userController.register);
apiRouter.post("/member/login", controllers.api.v1.userController.login);
apiRouter.get("/whoami", controllers.api.v1.userController.authorize, controllers.api.v1.userController.whoAmI);

// API Documentation
apiRouter.get("/docs/swagger.json", (req, res) => {
  res.status(200).json(swaggerDocument)
});

apiRouter.get(
  '/docs', redoc({
    title: 'API Docs',
    specUrl: 'docs/swagger.json'
  })
);

/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */
apiRouter.get("/api/v1/errors", () => {
  throw new Error(
    "The Industrial Revolution and its consequences have been a disaster for the human race."
  );
});

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
