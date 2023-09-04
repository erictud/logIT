import { useQuery } from "react-query";
import { toast } from "react-hot-toast";

import { fetchDiaryPages } from "../../services/apiDiary";

export function useDiaryPages() {
  const { data: diaryPages, isLoading } = useQuery({
    queryKey: ["diaryPages"],
    queryFn: fetchDiaryPages,
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { diaryPages, isLoading };
}
