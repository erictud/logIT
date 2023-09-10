import Spinner from "../../ui/Spinner";
import Warning from "../../ui/Warning";
import DiaryPagePreview from "./DiaryPagePreview";

import { usePages } from "./usePages";

export default function AllDiaryPages() {
  const { diaryPages, isLoading: isFetching } = usePages();

  return (
    <div>
      {!isFetching && diaryPages.map((page) => <DiaryPagePreview key={page.id} page={page} />)}
      {!isFetching && diaryPages.length === 0 && (
        <Warning message="No diary page created" linkText="create one!" link="create" />
      )}
      {isFetching && <Spinner />}
    </div>
  );
}
