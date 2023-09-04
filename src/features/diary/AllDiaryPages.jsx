import Spinner from "../../ui/Spinner";
import DiaryPagePreview from "./DiaryPagePreview";

import { useDiaryPages } from "./useDiaryPages";

export default function AllDiaryPages() {
  const { diaryPages, isLoading: isFetching } = useDiaryPages();

  if (isFetching) return <Spinner />;

  return (
    <div>
      {diaryPages.map((page) => (
        <DiaryPagePreview key={page.id} page={page} />
      ))}
    </div>
  );
}
