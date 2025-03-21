import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";

import toast from "react-hot-toast";
import UserUpdateModal from "../../../components/Modal/UserUpdateModal";

const ManageUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      return data;
    },
    queryKey: ["users"],
  });

  const { mutateAsync } = useMutation({
    mutationFn: async (updatedUser) => {
      const { data } = await axiosSecure.patch(
        `/user/update/${updatedUser.email}`,
        updatedUser
      );
      return data;
    },
    onSuccess: () => {
      toast.success("User updated successfully");
      refetch();
      setIsOpen(false);
    },
    onError: () => {
      toast.error("Failed to update user");
    },
  });

  const handleUpdateRole = (user) => {
    setSelectedUser(user);
    setIsOpen(true);
  };

  const modalHandler = async (selectedRole) => {
    if (!selectedUser) return;

    const updatedUser = {
      email: selectedUser.email,
      role: selectedRole,
      status: "verified",
    };

    try {
      await mutateAsync(updatedUser);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border">
          <thead className="bg-sky-500">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Role</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Update Role</th>
              <th className="border border-gray-300 px-4 py-2">Remove User</th>
            </tr>
          </thead>
          <tbody className="border">
            {users.map((user, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  {user.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-white bg-green-400 px-2 py-1 font-medium rounded-md">
                    {user.status}
                  </span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleUpdateRole(user)}
                    className="relative inline-block px-3 py-1 font-semibold text-green-900 bg-green-200 rounded-full hover:bg-green-300 transition"
                  >
                    Update Role
                  </button>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                    onClick={() => alert(`Removing user: ${user.email}`)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isOpen && (
        <UserUpdateModal
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          modalHandler={modalHandler}
          user={selectedUser}
        />
      )}
    </div>
  );
};

export default ManageUser;
