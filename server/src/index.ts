import express from 'express';
import cors from 'cors';
import { ROUTER } from './routers';

const app = express();

app.use(cors());

app.use(express.json());
// @ts-ignore-next-line
BigInt.prototype.toJSON = function () {
  return parseInt(this.toString()) ?? this.toString();
};

app.use('/continents', ROUTER.continents);
app.use('/countries', ROUTER.countries);
app.use('/location', ROUTER.location);

const port = 4200;
app.listen(port, () => console.log(`Server running on port ${port}`));
