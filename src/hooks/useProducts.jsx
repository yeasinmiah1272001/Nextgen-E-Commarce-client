import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const useProducts = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allproduct");
      return res.data;
    },
  });
  return [products, isLoading, refetch];
};

export default useProducts;
