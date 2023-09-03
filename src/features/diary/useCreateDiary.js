import { useMutation } from "react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { createDiary as createDiaryAPI } from "../../services/apiDiary";

export const useCreateDiary = function () {
  const navigate = useNavigate();

  const { isLoading, mutate: createDiary } = useMutation({
    mutationFn: createDiaryAPI,
    onSuccess: (data) => {
      console.log(data);
      toast.success("Diary page added successfully!");
      navigate("/diary");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isLoading, createDiary };
};
