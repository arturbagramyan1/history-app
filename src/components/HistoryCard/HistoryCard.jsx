import "./HistoryCard.css";

function HistoryCard({ item }) {
	const eventDate = new Date(item.event_date_utc).toLocaleDateString();

	return (
		<div className="card">
			<h2>{item.title}</h2>
			<p>
				<strong>Date:</strong> {eventDate}
			</p>
			<p>{item.details}</p>
			<div className="links">
				{item.links.article && (
					<a href={item.links.article} target="_blank">
						Article
					</a>
				)}
				{item.links.wikipedia && (
					<a href={item.links.wikipedia} target="_blank">
						Wikipedia
					</a>
				)}
				{item.links.reddit && (
					<a href={item.links.reddit} target="_blank" rel="noopener noreferrer">
						Reddit
					</a>
				)}
			</div>
		</div>
	);
}

export default HistoryCard;
