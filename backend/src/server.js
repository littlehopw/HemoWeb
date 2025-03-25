import express from 'express';
import cors from 'cors';
import './config/env.js';
import pool from './config/database.js';
import testRoutes from './routes/testRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { testConnection } from './controllers/testController.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', testRoutes);
app.use('/auth', authRoutes);

const router = express.Router();

router.get('/test', testConnection);

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default router;