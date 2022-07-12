import express from 'express';
import cors from 'cors';
export const app = express();
const port = 5000;
import Router from './routes/name';
import errorHandlerMiddleware from './midllewares/errorHandler';

app.use(cors());

app.use('/api', Router);

// app.get('/', (req, res) => {
//   res.send('hell0');
// });

app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
