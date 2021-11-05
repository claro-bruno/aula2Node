import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';
import { router } from './routes';
import './database';




// import { categoriesRoutes } from './routes/categories.router';
// import { specificationsRouter } from './routes/specifications.routes';

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
// app.get('/get', (request, response) => {
//   return response.status(200).json('Hello World');
// });

app.use(router);

app.listen(3333, () => console.log('Server is listening...'));