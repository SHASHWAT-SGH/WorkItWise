import React, { useEffect, useState } from "react";
import { AuthProvider } from "../../contexts/AuthContext";
import MainApp from "../../apps/MainApp";
import AuthApp from "../../apps/AuthApp";
// async storage
import AsyncStorage from "@react-native-async-storage/async-storage";
// axios
import { setAxiosAuthToken } from "../../utils/axiosInstance";
import Loader from "../Loader";

const AuthAndMain = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      setIsAuthenticated(false);
      setLoading(false);
    } else {
      setAxiosAuthToken(token);
      setIsAuthenticated(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <AuthProvider value={{ isAuthenticated, setIsAuthenticated }}>
      {isAuthenticated ? <MainApp /> : <AuthApp />}
    </AuthProvider>
  );
};

export default AuthAndMain;
