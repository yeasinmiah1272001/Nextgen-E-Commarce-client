import React, { useContext } from "react";
import Container from "../../../components/Container";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { FaShoppingCart, FaMoneyBillWave, FaHistory } from "react-icons/fa";
import useCarts from "../../../hooks/useCarts";
import { AuthContext } from "../../../provider/AuthProvider";

const UserHome = () => {
  const [carts] = useCarts();
  const { user } = useContext(AuthContext);
  // Calculate total spending
  const totalSpending = carts.reduce((sum, cart) => sum + cart.totalPrice, 0);

  // Format data for bar chart
  const chartData = carts.map((cart, index) => ({
    name: `Order ${index + 1}`,
    amount: cart.totalPrice,
  }));

  // Format data for pie chart
  const pieData = carts.map((cart, index) => ({
    name: `Order ${index + 1}`,
    value: cart.totalPrice,
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <Container>
      <div className="py-8">
        {/* User Profile Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img
              src={user.photoURL || "/placeholder.svg"}
              alt={"name"}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold">{user?.displayName}</h1>
            <p className="text-gray-600">{user?.email}</p>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className=" p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <FaShoppingCart className="text-blue-600 text-xl" />
              </div>
              <div>
                <p className="text-gray-500">Total Orders</p>
                <h3 className="text-2xl font-bold">{carts.length}</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-full">
                <FaMoneyBillWave className="text-green-600 text-xl" />
              </div>
              <div>
                <p className="text-gray-500">Total Spending</p>
                <h3 className="text-2xl font-bold">
                  {formatCurrency(totalSpending)}
                </h3>
              </div>
            </div>
          </div>

          <div className=" p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-full">
                <FaHistory className="text-purple-600 text-xl" />
              </div>
              <div>
                <p className="text-gray-500">Average Order</p>
                <h3 className="text-2xl font-bold">
                  {formatCurrency(totalSpending / carts.length)}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className=" p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Order History</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                  <Bar dataKey="amount" fill="#4F46E5" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className=" p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Spending Distribution</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className=" p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className=" divide-y divide-gray-200">
                {carts.map((cart) => (
                  <tr key={cart._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {cart._id.substring(0, 8)}...
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {cart.paymentIntentId.substring(0, 10)}...
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatCurrency(cart.totalPrice)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UserHome;
