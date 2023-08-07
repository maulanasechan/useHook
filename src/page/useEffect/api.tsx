import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import { UseQueryOptions } from "../../types/react-query";
import apiClient from "../../config/api-client";

export type Post = {
  id: string;
  userId: string;
  title: string;
  body: string;
};

export const useQueryPost = ({
  options,
}: {
  options?: UseQueryOptions<Post[]>;
}) =>
  useQuery(
    ["listPost"],
    () =>
      apiClient
        .get<unknown, { data: Post[] }>(
          "https://jsonplaceholder.typicode.com/posts"
        )
        .then((res) => res.data),
    options
  );
