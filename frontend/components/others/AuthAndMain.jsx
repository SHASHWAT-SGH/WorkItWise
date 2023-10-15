import React, { useEffect, useState } from "react";
import { AuthProvider } from "../../contexts/AuthContext";
import MainApp from "../../apps/MainApp";
import AuthApp from "../../apps/AuthApp";
// async storage
import AsyncStorage from "@react-native-async-storage/async-storage";
// axios
import { setAxiosAuthToken } from "../../utils/axiosInstance";

const AuthAndMain = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuth = async () => {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      setIsAuthenticated(false);
    } else {
      setAxiosAuthToken(token);
      setIsAuthenticated(true);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthProvider value={{ isAuthenticated, setIsAuthenticated }}>
      {isAuthenticated ? <MainApp /> : <AuthApp />}
    </AuthProvider>
  );
};

export default AuthAndMain;
