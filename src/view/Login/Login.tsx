import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.scss";
import { INVALID_USERNAME_PASSWORD } from "./constants";
import { login } from "../../services/api/auth";
import useFetch from "../../hooks/useFetch";
import { Typography } from "../../component/Typography/Typography";
import { InputText } from "../../component/InputText/InputText";
import { EMAIL_REGEX } from "../../constants/constants/constants";
import { Button } from "../../component/Button/Button";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { isDirty, isValid },
    handleSubmit,
    getValues,
    reset,
  } = useForm({
    mode: "onChange",
  });
  const error = "";

  const { execute: loginUser } = useFetch(login, {
    onSuccess(data) {
      console.log("data after login", data);
      localStorage.setItem("idToken", data);
      navigate("/chatbot");
    },
    onError(e) {
      console.log(e);
      reset();
    },
  });
  useEffect(() => {
    if (localStorage.getItem("idToken")) {
      navigate("/chatbot");
    }
  }, []);

  const onSubmit = () => {
    const { email, password } = getValues();
    loginUser({
      username: email,
      password: password,
    });
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <section className={style.container}>
      <div className={style.subContainerLeft}>
        <div className={style.formWrapper}>
          <div className={style.formSubWrapper}>
            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={style.titleContainer}>
                <Typography className={style.title}>Reengage.AI</Typography>
                <Typography className={style.error}>
                  {error ? INVALID_USERNAME_PASSWORD : <>&nbsp;</>}
                </Typography>
              </div>
              <Typography className={style.login}>Login</Typography>
              <Typography className={style.subtitle}>
                Please enter the details below to continue
              </Typography>
              <div className={style.field}>
                <Typography variant="b3-medium" className={style.inputLabel}>
                  Email<span className={style.required}> *</span>
                </Typography>
                <InputText
                  type="text"
                  {...register("email", {
                    required: true,
                    pattern: EMAIL_REGEX,
                  })}
                  fullWidth
                />
              </div>
              <div className={style.field} style={{ marginTop: "0.8rem" }}>
                <Typography variant="b3-medium" className={style.inputLabel}>
                  Password<span className={style.required}> *</span>
                </Typography>
                <InputText
                  type="password"
                  {...register("password", { required: true })}
                  fullWidth
                />
                <div className={style.belowPassword}>
                  <Typography
                    variant="b4-regular"
                    className={style.forgotPasswordText}
                    onClick={handleForgotPassword}
                  >
                    Forgot password?
                  </Typography>
                </div>
              </div>

              <div className={style.buttonWrapper}>
                <Button
                  className={style.innerButton}
                  type="submit"
                  disabled={!isDirty || !isValid}
                >
                  <Typography>Log in</Typography>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={style.subContainerRight}>
        <div className={style.mainImage}>{/* will add this later */}</div>
        <div className={style.imageWrapper} />
      </div>
    </section>
  );
};

export default Login;
