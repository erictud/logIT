import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-hot-toast";

import { updateCurrentUser as updateCurrentUserAPI } from "../../services/apiUser";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateCurrentUser, isLoading } = useMutation({
    mutationFn: updateCurrentUserAPI,
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: () => {
      toast.success("User updated successfully!");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });

  return { updateCurrentUser, isLoading };
}
