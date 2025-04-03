import users from "../users.json";

export const AuthApi = {
  authenticate: (login: string, password: string) => {
    const user = users.find(
      (u) => u.login === login && u.password === password
    );
    return user
      ? { user }
      : {
          error: "Имя пользователя или пароль введены не верно",
        };
  },

  validateRegistration: (
    name: string,
    login: string,
    password: string,
    confirmPassword: string
  ) => {
    const errors: Record<string, string> = {};

    if (password !== confirmPassword) {
      errors.password = "Введенные пароли не совпадают";
    }

    if (users.some((u) => u.login === login)) {
      errors.login = "Пользователь с таким логином уже зарегистрирован";
    }

    if (Object.keys(errors).length > 0) {
      return { errors };
    }

    return {
      success: true,
      message: "Регистрация успешна!",
      user: {
        name: name,
        login: login,
      },
      errors,
    };
  },
};
