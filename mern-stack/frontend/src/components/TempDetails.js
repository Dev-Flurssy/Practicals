import { useWorkoutContext } from "../hooks/useWorkoutContext.js";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../hooks/useAuthContext.js";

const TempDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext();
  const { user } = useAuthContext();

  const handleDelete = async () => {
    if (!user) {
      alert("You must be logged in to delete a workout.");
      return;
    }

    try {
      const response = await fetch("/api/workouts/" + workout._id, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "DELETE_WORKOUT", payload: json });
      } else {
        alert(json.error || "Failed to delete workout.");
      }
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Network error. Please try again.");
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
        title="Delete workout"
      >
        delete
      </span>
    </div>
  );
};

export default TempDetails;
