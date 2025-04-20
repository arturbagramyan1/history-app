import { useEffect, useState } from "react";
import fetchHistory from "../../api/history"; // Correct import for fetchHistory
import HistoryCard from "../HistoryCard/HistoryCard"; // Correct import for HistoryCard

function HistoryList() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetchHistory()
			.then((data) => {
				setItems(data);
			})
			.catch(console.error);
		//because of strict mode my API request fetches 2 times
	}, []);

	return (
		<div>
			{items.map((item) => (
				<HistoryCard key={item.id} item={item} />
			))}
			{console.log(items)}
		</div>
	);
}
export default HistoryList;
