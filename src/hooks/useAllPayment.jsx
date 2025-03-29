import React, { useContext } from "react";

import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useAllPayment = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: allPayment = [], refetch } = useQuery({
    queryKey: ["paymenthistory"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/paymenthistory`);
      console.log("all payment:", res.data);
      return res.data;
    },
  });
  return [allPayment, refetch];
};
export default useAllPayment;
