"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input, SubmitButton, Loader } from "@/components";
import { Eye, EyeOff, Info } from "lucide-react";
import { registerUser } from "@/lib/auth";
import { UserData, validate } from "@/lib/validation";
import { useToast } from "@/components/Toast";
import Tooltip from "@/components/Tooltip";

const Signup = () => {
  const { push } = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordConfirm, setShowPasswordConfirm] =
    useState<boolean>(false);
  const [isSubmitLoading, setIsSubmitLoading] = useState<boolean>(false);

  const [shakeUsername, setShakeUsername] = useState<boolean>(false);
  const [shakeEmail, setShakeEmail] = useState<boolean>(false);
  const [shakePassword, setShakePassword] = useState<boolean>(false);
  const [shakePasswordConfirm, setShakePasswordConfirm] =
    useState<boolean>(false);

  const initialData = {
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const [formValues, setFormValues] = useState<UserData>(initialData);
  const [formErrors, setFormErrors] = useState<UserData>();

  const { addToast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitLoading(true);

    setShakeUsername(false);
    setShakeEmail(false);
    setShakePassword(false);
    setShakePasswordConfirm(false);

    if (Object.values(formValues).some((field) => !field)) {
      if (!formValues.username) setShakeUsername(true);
      if (!formValues.email) setShakeEmail(true);
      if (!formValues.password) setShakePassword(true);
      if (!formValues.passwordConfirm) setShakePasswordConfirm(true);
      setIsSubmitLoading(false);
      return;
    }

    setFormErrors(validate(formValues));

    try {
      const isValid = registerUser(
        formValues.username,
        formValues.password,
        formValues.email
      );

      if (Object.values(validate(formValues)).every((field) => field === "")) {
        if (await isValid) {
          addToast("Usuário cadastrado com sucesso!", "success");
          push("/login");
        } else {
          addToast("Este usuário já existe!", "error");
        }
      }
    } catch (error) {
      console.error("Erro no login:", error);
    } finally {
      setIsSubmitLoading(false);
    }
  };

  useEffect(() => {
    if (shakeUsername || shakeEmail || shakePassword || shakePasswordConfirm) {
      const timer = setTimeout(() => {
        setShakeUsername(false);
        setShakeEmail(false);
        setShakePassword(false);
        setShakePasswordConfirm(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [shakeUsername, shakeEmail, shakePassword, shakePasswordConfirm]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col w-[450px] p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-center font-bold text-[28px] md:text-[32px] hover:scale-[1.03] transition-all duration-500 cursor-default">
          Cadastre-se na{" "}
          <span className="gradient-text from-secondary-purple to-primary-purple">
            Capivara AI
          </span>
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col mt-8">
          <div className="flex align-center mt-8 mb-2">
            <label className="font-medium mr-1" htmlFor="username">
              Usuário
            </label>
            <Tooltip content="Seu nome de usuário.">
              <Info className="text-gray-800" />
            </Tooltip>
          </div>

          <Input
            id="username"
            type="text"
            placeholder="Digite seu usuário"
            value={formValues.username}
            onChange={handleChange}
            className={`${shakeUsername && "animate-shake"}`}
            state={formErrors?.username ? "error" : "default"}
            disabled={isSubmitLoading}
          />

          <div className="text-red-700 text-sm mt-2">
            {formErrors?.username}
          </div>

          <div className="flex align-center mt-8 mb-2">
            <label className="font-medium mr-1" htmlFor="email">
              E-mail
            </label>
            <Tooltip content="Insira um e-mail válido.">
              <Info className="text-gray-800" />
            </Tooltip>
          </div>

          <Input
            id="email"
            type="text"
            placeholder="Digite seu e-mail"
            value={formValues.email}
            onChange={handleChange}
            className={`${shakeEmail && "animate-shake"}`}
            state={formErrors?.email ? "error" : "default"}
            disabled={isSubmitLoading}
          />

          <div className="text-red-700 text-sm mt-2">{formErrors?.email}</div>

          <div className="flex align-center mt-8 mb-2">
            <label className="font-medium mr-1" htmlFor="password">
              Senha
            </label>
            <Tooltip content="Deve conter no mínimo 6 caracteres.">
              <Info className="text-gray-800" />
            </Tooltip>
          </div>

          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Digite sua senha"
            value={formValues.password}
            onChange={handleChange}
            icon={
              showPassword ? (
                <EyeOff size={20} className="text-primary-purple" />
              ) : (
                <Eye size={20} className="text-primary-purple" />
              )
            }
            onClickIcon={() => setShowPassword((prev) => !prev)}
            className={`${shakePassword && "animate-shake"}`}
            state={formErrors?.password ? "error" : "default"}
            disabled={isSubmitLoading}
          />

          <div className="text-red-700 text-sm mt-2">
            {formErrors?.password}
          </div>

          <div className="flex align-center mt-8 mb-2">
            <label className="font-medium mr-1" htmlFor="passwordConfirm">
              Confirmar senha
            </label>
            <Tooltip content="As senhas devem ser iguais.">
              <Info className="text-gray-800" />
            </Tooltip>
          </div>

          <Input
            id="passwordConfirm"
            type={showPasswordConfirm ? "text" : "password"}
            placeholder="Repita sua senha"
            value={formValues.passwordConfirm}
            onChange={handleChange}
            icon={
              showPasswordConfirm ? (
                <EyeOff size={20} className="text-primary-purple" />
              ) : (
                <Eye size={20} className="text-primary-purple" />
              )
            }
            onClickIcon={() => setShowPasswordConfirm((prev) => !prev)}
            className={`${shakePasswordConfirm && "animate-shake"}`}
            state={formErrors?.passwordConfirm ? "error" : "default"}
            disabled={isSubmitLoading}
          />

          <div className="text-red-700 text-sm mt-2">
            {formErrors?.passwordConfirm}
          </div>

          <SubmitButton
            title="Cadastrar"
            className="mt-8"
            disabled={isSubmitLoading}
          />

          {isSubmitLoading && (
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full">
              <Loader />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
