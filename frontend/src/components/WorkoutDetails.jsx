function WorkoutDetails({ workout }) {
  return (
    <div className='workout-details'>
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong> {workout.load}
      </p>
      <p>
        <strong>reps: </strong> {workout.reps}
      </p>
      <p>
        <strong>Created At: </strong> {workout.createdAt}
      </p>
    </div>
  );
}

export default WorkoutDetails;
