import { useMutation, useQueryClient } from "react-query";
import { deleteDiaryPage as deleteDiaryPageAPI } from "../../services/apiDiary";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useDeleteDiaryPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteDiaryPage } = useMutation({
    mutationFn: deleteDiaryPageAPI,
    onSuccess: () => {
      navigate("/diary");
      queryClient.invalidateQueries(["diaryPages"]);
      toast.success("Diary pages deleted successfully!");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteDiaryPage };
}
