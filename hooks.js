import axios from "axios";
import { useState } from "react";

/** Custom hook for handling card flipping. */
function useFlip() {
  const [isFacingUp, setIsFacingUp] = useState(true);

  const flipCard = () => {
    setIsFacingUp((isUp) => !isUp);
  };

  return [isFacingUp, flipCard];
}

function useAxios(baseURL) {
  const [data, setData] = useState([]);

  const fetchData = async (restOfURL) => {
    // console.log("URL:", `${baseURL}${restOfURL}`);
    try {
      const response = await axios.get(`${baseURL}${restOfURL}`);
      setData((prevData) => [...prevData, { ...response.data }]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return [data, fetchData];
}

export { useFlip, useAxios };
