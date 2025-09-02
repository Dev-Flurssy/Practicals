const WorkoutDetails = ({workout}) => {
    return ( <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.Load}</p>
        <p><strong>Reps: </strong>{workout.Reps}</p>
        <p>{workout.createdAt}</p>
    </div> );
}
 
export default WorkoutDetails;