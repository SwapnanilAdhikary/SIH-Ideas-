// Define the function to fetch and display disaster data
console.log('Hello');

function fetchDisasterData() {
	const options = {
		method: 'GET',
		url: 'https://api.ambeedata.com/disasters/latest/by-country-code',
		params: {
			countryCode: 'IND', // Replace with the desired country code
			limit: '1', // You can modify the limit as needed
			page: '1',
		},
		headers: {
			'x-api-key':
				'2cc5572bae4bf7b6608387b4d1319dd3d6ddbe063cca6da0b534167818c54dcb',
			'Content-type': 'application/json',
		},
	};

	// Fetch data using Axios
	axios
		.request(options)
		.then(function (response) {
			const disasterData = response.data.result;
			displayDisasterData(disasterData);
		})
		.catch(function (error) {
			console.error('Error fetching disaster data:', error);
		});
}

// Define the function to display data in the HTML
function displayDisasterData(data) {
  console.log(data);
	const container = document.getElementById('disaster-data');
	container.innerHTML = ''; // Clear previous data

	if (data.length === 0) {
		container.innerHTML =
			'<p>No disasters found for the specified country.</p>';
		return;
	}

	data.forEach((disaster) => {
		// Create a div to display each disaster's information
		const disasterDiv = document.createElement('div');
		disasterDiv.classList.add('disaster-event');

		// Fill the div with disaster event details
		disasterDiv.innerHTML = `
            <h2>${disaster.event_name}</h2>
            <p><strong>Event Type:</strong> ${disaster.event_type}</p>
            <p><strong>Date:</strong> ${disaster.date}</p>
            <p><strong>Location (Lat, Lng):</strong> ${disaster.lat}, ${disaster.lng}</p>
            <p><strong>Source Event ID:</strong> ${disaster.source_event_id}</p>
        `;

		// Append the div to the container
		container.appendChild(disasterDiv);
	});
}

// Call the function to fetch and display data
fetchDisasterData();
