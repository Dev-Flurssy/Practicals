import { useWorkoutContext } from "../hooks/useWorkoutContext.js";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const TempDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext();

  const handleDelete = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>

      <span
        className="material-symbols-outlined"
        onClick={handleDelete}
        style={{ cursor: "pointer", color: "red" }}
      >
        delete
      </span>
    </div>
  );
};

export default TempDetails;
