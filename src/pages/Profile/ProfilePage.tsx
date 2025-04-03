import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export function ProfilePage() {
  const username = useSelector((state: RootState) => state.auth.username);
  return (
    <>
      <h1>Profile of {username}</h1>
    </>
  );
}
