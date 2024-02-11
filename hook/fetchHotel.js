import { useState, useEffect } from "react";
import axios from "axios";

const fetchHotels = (places) => {
    const [hotels, setHotels] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true)

        try {
            if (places === 1) {
                const response = await axios.get('http://localhost:5003/api/hotels/byCountry/65bf6ee1bf5bb2abe03212ec?limit=3');
                setHotels(response.data.hotels)
            } else {
                const response = await axios.get('http://localhost:5003/api/hotels/byCountry/65bf6ee1bf5bb2abe03212ec');
                setHotels(response.data.hotels)
            }
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    const refetch = () => {
        setIsLoading(true)
        fetchData();
    }

    return { hotels, isLoading, error, refetch }
}

export default fetchHotels