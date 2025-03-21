import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Container from "../components/Container";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <div className="flex justify-center items-center min-h-screen">
        <div className=" shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
          <div className="mb-4">
            <img
              src={user?.photoURL || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {user?.displayName || "Your Name"}
          </h1>
          <p className="text-gray-600 mb-4">
            {user?.email || "your.email@example.com"}
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-all">
            Edit Profile
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
