import style from "./Form.module.css";

type FormData = {
  login: string;
  password: string;
  name?: string;
  confirmPassword?: string;
};
type Props<T extends FormData> = {
  handleSubmit: (e: React.FormEvent) => void;
  form: T;
  setForm: (form: T) => void;
  error: string | { [key: string]: string };
  isRegistration?: boolean;
};

export function Form<T extends FormData>({
  handleSubmit,
  form,
  setForm,
  error,
  isRegistration = false,
}: Props<T>) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const getInputType = (key: string): string => {
    if (key.includes("password")) return "password";
    if (key === "email") return "email";
    return "text";
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      {Object.entries(form).map(([key, value]) => (
        <div key={key} className={style.inputGroup}>
          <input
            id={key}
            name={key}
            placeholder={`Enter ${key}...`}
            type={getInputType(key)}
            value={value}
            onChange={handleChange}
            className={style.input}
          />
        </div>
      ))}

      {typeof error === "string" ? (
        <div className={style.error}>{error}</div>
      ) : (
        Object.entries(error).map(([key, value]) => (
          <div key={key} className={style.error}>
            {value}
          </div>
        ))
      )}

      <button type="submit" className={style.button}>
        {isRegistration ? "Register" : "Login"}
      </button>
    </form>
  );
}
