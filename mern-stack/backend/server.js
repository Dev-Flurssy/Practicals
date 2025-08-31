import express from 'express';
import dotenv from 'dotenv';
import workoutRoutes from './routes/workout.js';
import mongoose from 'mongoose';

dotenv.config();
const app = express();

app.use(express.json());
app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next();
})

app.use('/api/workouts', workoutRoutes);
mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    console.log('Connected to DB');
})
.catch((error) =>{
    console.log(error);
})

app.listen(process.env.PORT, () =>{
    console.log('Server is running on port ', process.env.PORT);
})