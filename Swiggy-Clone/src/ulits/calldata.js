import { useEffect, useState } from "react";
import { GIT_HUB } from "./urls";

const useMyApi = () => {
    const [data, setData] = useState(null);
    // let data;

    const fetchApi = async () => {
        try {
            let response = await fetch(GIT_HUB);
            let resObj = await response.json();
            setData(resObj);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return data;
};
// console.log(data)
export default useMyApi;
