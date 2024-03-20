import Background from "../components/Background/Background";
import customFetch from "../../utils/CustomFetsh";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from 'react';
import LoadingItem from "@/components/LoadingItem";

const HomeContext = createContext();

export const loader = async () => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const { data } = await customFetch.get('users/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return data;
  } catch (error) {
   return redirect('/login');
  }
}

const Home = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const [isLoading, setIsLoading] = useState(true);

  const checkUserToken = () => {
    const userToken = localStorage.getItem('accessToken');
    if (!userToken || userToken === 'undefined') {
      navigate('/login');
    } else {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 4000);
  
      return () => {
        clearTimeout(timeout);
      };
    }
  };
  useEffect(() => {
    checkUserToken();
    const handleStorageChange = () => {
      checkUserToken();
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [checkUserToken]);

  return (
    <HomeContext.Provider value={{ data }}>
      <Background>
        {isLoading ? (
          <LoadingItem />
        ) :  (
          <>
            <Navbar />
            <Outlet context={{ data }} />
            <Footer />
          </>
        )}
      </Background>
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => useContext(HomeContext);
export default Home;
