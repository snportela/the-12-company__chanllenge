"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, SubmitButton, Loader } from "@/components";
import { Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(signupData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col w-[450px] p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-center font-bold text-[28px] md:text-[32px] hover:scale-[1.03] transition-all duration-500 cursor-default">
          Cadastre-se na{" "}
          <span className="gradient-text from-secondary-purple to-primary-purple">
            Capivara AI
          </span>
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col mt-8 relative">
          <label
            className="block text-base font-medium mt-8 mb-2"
            htmlFor="username-input"
          >
            Usuário
          </label>
          <Input
            id="username-input"
            type="text"
            placeholder="Digite seu usuário"
            value={signupData.username}
            onChange={(event) => {
              setSignupData({ ...signupData, username: event?.target.value });
            }}
          />

          <label
            className="block text-base font-medium mt-8 mb-2"
            htmlFor="email-input"
          >
            E-mail
          </label>
          <Input
            id="email-input"
            type="text"
            placeholder="Digite seu e-mail"
            value={signupData.email}
            onChange={(event) => {
              setSignupData({ ...signupData, email: event?.target.value });
            }}
          />

          <label
            className="block text-base font-medium mt-8 mb-2"
            htmlFor="password-input"
          >
            Senha
          </label>
          <Input
            id="password-input"
            type={showPassword ? "text" : "password"}
            placeholder="Digite sua senha"
            value={signupData.password}
            onChange={(event) => {
              setSignupData({ ...signupData, password: event.target.value });
            }}
            icon={
              showPassword ? (
                <EyeOff size={20} className="text-primary-purple" />
              ) : (
                <Eye size={20} className="text-primary-purple" />
              )
            }
            onClickIcon={() => setShowPassword((prev) => !prev)}
          />

          <label
            className="block text-base font-medium mt-8 mb-2"
            htmlFor="password-confirm-input"
          >
            Confirmar senha
          </label>
          <Input
            id="password-confirm-input"
            type={showPassword ? "text" : "password"}
            placeholder="Repita sua senha"
            value={signupData.passwordConfirm}
            onChange={(event) => {
              setSignupData({
                ...signupData,
                passwordConfirm: event.target.value,
              });
            }}
            icon={
              showPassword ? (
                <EyeOff size={20} className="text-primary-purple" />
              ) : (
                <Eye size={20} className="text-primary-purple" />
              )
            }
            onClickIcon={() => setShowPassword((prev) => !prev)}
          />

          <SubmitButton title="Cadastrar" className="mt-8" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
