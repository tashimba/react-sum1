import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthApi } from "../../api/AuthApi";
import { Form } from "../../components";
import { useAppDispatch } from "../../store/hooks";
import { login } from "../../store/authSlice";

export const RegistrationPage = () => {
  const [form, setForm] = useState({
    login: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = AuthApi.validateRegistration(
      form.name,
      form.login,
      form.password,
      form.confirmPassword
    );
    console.log(result);
    if (result.success) {
      dispatch(login({ username: result.user.login }));
      navigate("/profile");
    }
    if (result.errors) {
      setError(result.errors);
    }
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      form={form}
      setForm={setForm}
      error={error}
      isRegistration={true}
    />
  );
};
