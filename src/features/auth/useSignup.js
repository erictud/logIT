import { useMutation } from "react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { signup as signupAPI } from "../../services/apiAuth";

export const useSignup = () => {
  const navigate = useNavigate();

  const { isLoading, mutate: signup } = useMutation({
    mutationFn: signupAPI,
    onSuccess: (data) => {
      console.log(data);
      toast.success("User created successfully! Redirecting...");
      navigate("/diary");
    },
    onError: (err) => {
      console.log(err);
      toast.error("Err!");
    },
  });

  return { isLoading, signup };
};
