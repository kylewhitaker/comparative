import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
// @ts-ignore-next-line
BigInt.prototype.toJSON = function () {
  return parseInt(this.toString()) ?? this.toString();
};

app.get('/', async (req, res) => {
  try {
    const data = await prisma.owidCovidLatest.findMany({
      where: {
        iso_code: 'USA',
        date: {
          gte: '2022-05-01',
        },
      },
      select: {
        location: true,
        date: true,
        new_cases: true,
        icu_patients: true,
        new_deaths: true,
        total_deaths: true,
      },
    });
    res.json(data);
  } catch (error) {
    console.log(error);
    res.json({
      message: 'System Error',
      error: JSON.stringify(error),
    });
  }
});

const port = 4200;
app.listen(port, () => console.log(`Server running on port ${port}`));
