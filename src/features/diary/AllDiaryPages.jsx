import Spinner from "../../ui/Spinner";
import DiaryPagePreview from "./DiaryPagePreview";

import { useDiaryPages } from "./useDiaryPages";

export default function AllDiaryPages() {
  const { diaryPages, isLoading: isFetching } = useDiaryPages();

  return (
    <div>
      {!isFetching && diaryPages.map((page) => <DiaryPagePreview key={page.id} page={page} />)}
      {isFetching && <Spinner />}
    </div>
  );
}
