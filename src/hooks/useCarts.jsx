import React, { useContext } from "react";

import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useCarts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: carts = [], refetch } = useQuery({
    queryKey: ["paymenthistory", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/paymenthistory/${user?.email}`);
      console.log("Carts Data:", res.data);
      return res.data;
    },
  });
  return [carts, refetch];
};

export default useCarts;
