const API_URL = "https://api.spacexdata.com/v3/history";

const fetchHistory = async () => {
    const res = await fetch(API_URL);
    if (!res.ok) {
        throw new Error("Failed to fetch history data");
    }
    return res.json(); // Return the JSON data when the response is OK
};

export default fetchHistory;
