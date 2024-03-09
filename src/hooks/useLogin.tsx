import { loginUser } from "@/apiHandlers/user";
import { useJwtStore } from "@/stores/useJWTStore";
import { LoginErrorData, LoginFormData } from "@/types/LoginForm";
import loginValidator from "@/validators/loginValidator";
import { useMemo, useState } from "react";

const useLogin = () => {
  const { jwt, setJWT } = useJwtStore();

  const [loginFormData, setLoginFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState<LoginErrorData>({
    email: null,
    password: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginFormData((prevData: LoginFormData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      // setButtonLoading(buttonId, true);
      await loginValidator(loginFormData, setLoginErrors);
      const res = await loginUser(loginFormData, setJWT);
      if (res.status === "401") {
        setLoginErrors({
          email: "Invalid creditentials",
          password: "Invalid creditentials",
        });
        return;
      }
      console.log(res);
      // await setJwt(token);
      // navigate("/dashboard");
      // setButtonLoading(buttonId, false);
    } catch (e) {
      if (e instanceof Error) {
        if (e.message === "Validation failed") {
          // setButtonLoading(buttonId, false);
          return;
        }
      }
    }
  };

  return {
    loginFormData,
    loginErrors,
    handleInputChange,
    handleLogin,
    setLoginErrors,
  };
};

export default useLogin;
