import AllDiaryPages from "../features/diary/AllDiaryPages";
import SearchSortDiaryPages from "../features/diary/SearchSortDiaryPages";

export default function Diaries() {
  return (
    <div>
      <SearchSortDiaryPages />
      <AllDiaryPages />
    </div>
  );
}
