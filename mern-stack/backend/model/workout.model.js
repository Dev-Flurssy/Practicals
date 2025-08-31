import mongoose from "mongoose";

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    Load:{
        type: Number,
        required: true
    },
    Reps:{
        type: Number,
        required: true
    }
},{timestamps:true})

export default mongoose.model('Workout', workoutSchema);