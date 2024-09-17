document.addEventListener('DOMContentLoaded', () => {
	fetchDisasterData();
});

function fetchDisasterData() {
	fetch('http://localhost:3000/disasters') // This calls the proxy server endpoint
		.then((response) => response.json())
		.then((data) => {
			displayDisasterData(data.result);
		})
		.catch((error) => {
			console.error('Error fetching disaster data:', error);
			displayErrorMessage(
				'Could not fetch disaster data. Please try again later.'
			);
		});
}

function displayDisasterData(data) {
	const container = document.getElementById('disaster-data');
	container.innerHTML = ''; // Clear any existing content

	if (data.length === 0) {
		container.innerHTML =
			'<p class="no-data">No disasters found for the specified country.</p>';
		return;
	}

	data.forEach((disaster) => {
		const disasterDiv = document.createElement('div');
		disasterDiv.classList.add('disaster-event');

		disasterDiv.innerHTML = `
            <h2>${disaster.event_name}</h2>
            <p><span>Event Type:</span> ${disaster.event_type}</p>
            <p><span>Date:</span> ${new Date(
							disaster.date
						).toLocaleString()}</p>
            <p><span>Location (Lat, Lng):</span> ${disaster.lat}, ${
			disaster.lng
		}</p>
            <p><span>Source Event ID:</span> ${disaster.source_event_id}</p>
        `;

		container.appendChild(disasterDiv);
	});
}

function displayErrorMessage(message) {
	const container = document.getElementById('disaster-data');
	container.innerHTML = `<p class="no-data">${message}</p>`;
}
