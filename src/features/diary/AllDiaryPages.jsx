import Spinner from "../../ui/Spinner";
import DiaryPagePreview from "./DiaryPagePreview";

import { usePages } from "./usePages";

export default function AllDiaryPages() {
  const { diaryPages, isLoading: isFetching } = usePages();

  return (
    <div>
      {!isFetching && diaryPages.map((page) => <DiaryPagePreview key={page.id} page={page} />)}
      {isFetching && <Spinner />}
    </div>
  );
}
