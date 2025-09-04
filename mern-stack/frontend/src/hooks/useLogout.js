import { useAuthContext } from "./useAuthContext.js";
import { useWorkoutContext } from "./useWorkoutContext.js";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workoutDispatch } = useWorkoutContext(); // ✅ use hook, not context directly

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // update auth context
    dispatch({ type: "LOGOUT" });

    // clear workouts
    workoutDispatch({ type: "SET_WORKOUTS", payload: null });
  };

  return { logout };
};
