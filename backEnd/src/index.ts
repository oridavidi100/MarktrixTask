import express from 'express';
// import cors from 'cors';
const port = 5000;
export const app = express();
app.get('/', (req, res) => {
  res.send('hell0');
});
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
