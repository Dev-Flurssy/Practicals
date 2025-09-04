import { useEffect } from "react";
import TempDetails from "../components/TempDetails.js";
import WorkoutForm from "../components/WorkoutForm.js";
import { useWorkoutContext } from "../hooks/useWorkoutContext.js";
import { useAuthContext } from "../hooks/useAuthContext.js";

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const jsonRes = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: jsonRes });
      }
    };

    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);

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
