import { useMutation, useQueryClient } from "react-query";
import { editDiary } from "../../services/apiDiary";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export function useEditDiaryPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const queryClient = useQueryClient();

  const { mutate: editDiaryPage, isLoading } = useMutation({
    mutationFn: editDiary,
    onSuccess: () => {
      toast.success("Diary edited successfully");
      navigate(`/diary`);
      queryClient.invalidateQueries({
        queryKey: ["diaryPage", id],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { editDiaryPage, isLoading };
}
