import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { FaUsers, FaShoppingCart, FaMoneyBillWave } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: state = {}, refetch } = useQuery({
    queryKey: ["paymenthistory", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin-state`);
      return res.data;
    },
  });

  // Ensure numerical values and fix toFixed issue
  const totalUsers = state?.user || 0;
  const totalOrders = state?.totalOrder || 0;
  const totalRevenue = state?.renevue || 0;
  const recentTransactions = state?.transactions || [];

  // Create chart data
  const chartData = [
    { name: "Users", value: totalUsers, color: "#4F46E5" },
    { name: "Orders", value: totalOrders, color: "#10B981" },
    { name: "Revenue", value: totalRevenue, color: "#8B5CF6" },
  ];

  // Colors for pie chart
  const COLORS = ["#4F46E5", "#10B981", "#8B5CF6"];

  return (
    <div className="p-6 min-h-screen space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          {
            label: "Total Users",
            value: totalUsers,
            icon: FaUsers,
            bg: "bg-indigo-100",
            text: "text-indigo-600",
          },
          {
            label: "Total Orders",
            value: totalOrders,
            icon: FaShoppingCart,
            bg: "bg-emerald-100",
            text: "text-emerald-600",
          },
          {
            label: "Total Revenue",
            value: `$${totalRevenue.toFixed(2)}`,
            icon: FaMoneyBillWave,
            bg: "bg-purple-100",
            text: "text-purple-600",
          },
        ].map(({ label, value, icon: Icon, bg, text }, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md p-6 flex items-center hover:shadow-lg transition-all"
          >
            <div className={`${bg} p-3 mr-4 rounded-full`}>
              <Icon className={`${text} text-2xl`} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">{label}</p>
              <h2 className="text-2xl font-bold">{value}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-gray-700">
            Admin Statistics
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {chartData.map((entry, index) => (
                <Bar
                  key={index}
                  dataKey="value"
                  fill={entry.color}
                  name={entry.name}
                  barSize={60}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-gray-700">Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                    stroke="#fff"
                    strokeWidth={2}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-gray-700">
          Recent Transactions
        </h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="">
              <th className="border p-2">User</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentTransactions.length > 0 ? (
              recentTransactions.map((txn, index) => (
                <tr key={index} className="text-center">
                  <td className="border p-2">{txn.user}</td>
                  <td className="border p-2">${txn.amount.toFixed(2)}</td>
                  <td className="border p-2">
                    {new Date(txn.date).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="border p-2 text-center text-gray-500"
                >
                  No recent transactions
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHome;
