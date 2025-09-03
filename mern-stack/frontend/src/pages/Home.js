import { useEffect } from "react";
import TempDetails from "../components/TempDetails.js";
import WorkoutForm from "../components/WorkoutForm.js";
import { useWorkoutContext } from "../hooks/useWorkoutContext.js";

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const jsonRes = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: jsonRes });
      }
    };
    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <TempDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
