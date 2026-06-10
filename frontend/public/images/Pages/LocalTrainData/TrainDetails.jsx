const TrainList = ({ source, destination, trains }) => {
  return (
    <div>
      <h1>Available Trains</h1>
      {trains.map((train) => (
        <TrainDetails
          key={train.id}
          source={source}
          destination={destination}
          trainName={train.name}
          trainNumber={train.number}
        />
      ))}
    </div>
  );
};

const TrainDetails = ({ source, destination, trainName, trainNumber }) => {
  const [fare, setFare] = useState(null);

  useEffect(() => {
    const fetchFare = async () => {
      const response = await fetch("http://localhost:8080/fare/getFare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source, destination }),
      });
      const data = await response.json();
      setFare(data.fare);
    };

    fetchFare();
  }, [source, destination]);

  return (
    <div>
      <h2>
        {trainName} (#{trainNumber})
      </h2>
      <p>Source: {source}</p>
      <p>Destination: {destination}</p>
      {fare !== null && <p>Fare: {fare}</p>}
    </div>
  );
};
