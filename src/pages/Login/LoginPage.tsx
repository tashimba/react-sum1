import React, { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { AuthApi } from "../../api/AuthApi";
import { login } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import { Form } from "../../components";

export const LoginPage = () => {
  const [form, setForm] = useState({ login: "", password: "" });
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = AuthApi.authenticate(form.login, form.password);
    if (result.user) {
      dispatch(login({ username: result.user.login }));
      navigate("/profile");
    } else {
      setError(result.error);
    }
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      form={form}
      setForm={setForm}
      error={error}
    />
  );
};
