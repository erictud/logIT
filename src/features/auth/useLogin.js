import { useMutation } from "react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { login as loginAPI } from "../../services/apiAuth";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginAPI,
    onSuccess: (data) => {
      console.log(data);
      toast.success("Logged in successfully!");
      navigate("/diary");
    },
    onError: () => {
      toast.error("Error while logging in! Try again!");
    },
  });

  return { isLoading, login };
}
