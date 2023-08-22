import { useQuery } from "react-query";

import { getUserDetails } from "../../services/apiAuth";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUserDetails,
  });

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
