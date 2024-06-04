import Background from "../components/Background/Background";
import customFetch from "../../utils/CustomFetsh";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { createContext, useContext, useEffect } from "react";

const HomeContext = createContext();

export const loader = async () => {
  const accessToken = localStorage.getItem("accessToken");

  try {
    const { data } = await customFetch.get(`/profile/current`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    return redirect("/login");
  }
};

const Home = () => {
  const navigate = useNavigate();
  const data = useLoaderData();

  useEffect(() => {
    const checkUserToken = () => {
      const userToken = localStorage.getItem("accessToken");
      if (!userToken || userToken === "undefined") {
        navigate("/login");
      }
    };

    checkUserToken();

    const handleStorageChange = () => {
      checkUserToken();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [navigate]);

  return (
    <HomeContext.Provider value={{ data }}>
      <Background>
        <>
          <Navbar />
          {<Outlet context={{ data }} />}
          {/* {<Outlet />} */}
          <Footer />
        </>
      </Background>
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => useContext(HomeContext);
export default Home;
