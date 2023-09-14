import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { fetchDiaryPage } from "../../services/apiDiary";

export function usePage() {
  const { id } = useParams();

  const {
    isLoading,
    data: diaryPage,
    isFetched,
  } = useQuery({
    queryKey: ["diaryPage", id],
    queryFn: () => fetchDiaryPage(id),
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { diaryPage, isLoading, isFetched };
}
