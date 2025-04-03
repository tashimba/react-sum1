import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectIsAuthenticated } from "../../store/authSlice";
import style from "./Header.module.css";

export function Header() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <Link to="/">Главная</Link>
        {!isAuthenticated && <Link to="/login">Вход</Link>}
        {!isAuthenticated && <Link to="/registration">Регистрация</Link>}
        {isAuthenticated && <Link to="/profile">Профиль</Link>}
      </nav>

      {isAuthenticated && (
        <div className={style.authSection}>
          <button onClick={handleLogout} className={style.logoutButton}>
            Выйти
          </button>
        </div>
      )}
    </header>
  );
}
