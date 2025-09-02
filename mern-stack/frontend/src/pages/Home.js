import { useEffect, useState } from "react";
import TempDetails from "../components/TempDetails.js";
import WorkoutForm from "../components/WorkoutForm.js";


const Home = () => {
const [workouts, setWorkouts] = useState(null);

useEffect(() =>{
    const fetchWorkouts = async () =>{
        const response = await fetch('/api/workouts');
        const jsonRes = await response.json();
        if(response.ok){
            setWorkouts(jsonRes);
        }
    }
    fetchWorkouts();
}, []);

    return ( <div className="home">
        <div className="workouts">
            {workouts && workouts.map((workout) =>(
               <TempDetails key={workout._id} workout={workout}/>
            ))}
        </div>
        <WorkoutForm />
    </div> );
}
 
export default Home;