import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export function useUser(id) {
  const { data, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    fetcher
  );
  return { user: data, isLoading, error };
}
