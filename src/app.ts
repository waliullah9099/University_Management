import cors from 'cors';
import router from './app/routes';
import cookieParser from 'cookie-parser';
import notFound from './app/middlewares/notFound';
import express, { Application, Request, Response } from 'express';
import globalErrorHanalar from './app/middlewares/globalErrorHanalar';


const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:3000"] }));

// application routes
app.use('/api/v1', router);

const test = async (req: Request, res: Response) => {

  const a = 'test';
  res.send(a);
};

app.get('/', test);

app.use(globalErrorHanalar);
app.use(notFound);

export default app;
