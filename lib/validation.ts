export interface UserData {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export const validate = (values: UserData) => {
  const errors: UserData = {
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!re.test(values.email)) errors.email = "Insira um e-mail válido!";
  if (values.password.length < 6)
    errors.password = "Senha deve conter no mínimo 6 caracteres!";
  if (values.password !== values.passwordConfirm)
    errors.passwordConfirm = "As senhas devem ser iguais!";

  return errors;
};
