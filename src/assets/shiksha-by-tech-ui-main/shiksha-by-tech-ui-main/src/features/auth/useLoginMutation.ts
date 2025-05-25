// src/api/auth/useLoginMutation.ts

import { useMutation } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login } from "./auth.service";
import { ILoginRequest } from "./auth.types";

const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation<any, any, ILoginRequest>({
    mutationFn: login,
    onSuccess: (data) => {
      // Save token securely
      localStorage.setItem("token", data.token);
      const user = jwtDecode(data.token);
      console.log("Decoded user", user);
      localStorage.setItem("user", JSON.stringify(user));

      toast.success("Logged in successfully!");
      navigate("/");
    },
    onError: (error) => {
      console.log("error while logging in", error);
      toast.error(error.message || "Login failed. Please try again.");
    },
  });
};

export default useLoginMutation;
