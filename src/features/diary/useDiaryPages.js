import { useQuery } from "react-query";
import { toast } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

import { fetchDiaryPages } from "../../services/apiDiary";

export function useDiaryPages() {
  // search by title & sort
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") || "";
  const sortBy = searchParams.get("sortBy") || "created_at-asc";
  const [field, method] = sortBy.split("-");

  const { data: diaryPages, isLoading } = useQuery({
    queryKey: ["diaryPages", title, field, method],
    queryFn: () => fetchDiaryPages({ title, sortBy: { field, method } }),
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { diaryPages, isLoading };
}
