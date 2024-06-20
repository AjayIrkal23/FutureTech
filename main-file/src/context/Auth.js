import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

const AuthContext = createContext();
export const baseUrl = "https://20.244.34.68:8000/api/";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  console.log(userInfo);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("FutureTechUser"));
    console.log(items, "hello");
    if (items) {
      setUser(items);
    }
  }, []);

  useEffect(() => {
    let isMounted = true; // flag to check if the component is mounted

    const fetchUserInfo = async () => {
      if (user) {
        try {
          const response = await axios
            .post(
              `${baseUrl}user/getUser`,
              {
                username: user.username
              },
              {
                headers: {
                  Authorization: `Bearer ${user?.token}` // Include the token in the headers
                }
              }
            )
            .then((resps) => {
              setUserInfo(resps.data.user);
            });
        } catch (error) {
          if (isMounted) {
            toast.error(
              error.message ||
                "An error occurred while fetching user information"
            );
          }
        }
      }
    };

    fetchUserInfo();

    return () => {
      isMounted = false; // set the flag to false when the component unmounts
    };
  }, [user]);

  const userLogin = (user, token) => {
    setUser(user);
    localStorage.setItem("FutureTechUser", JSON.stringify(user));
    localStorage.setItem("authToken", token); // Store the token in localStorage
    toast.success("Login Successful");
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("FutureTechUser");
    localStorage.removeItem("authToken"); // Remove the token from localStorage
    toast.success("Logout Successful");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userLogin,
        userLogout,
        setUser,
        userInfo,
        setUserInfo
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
