const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import CORS middleware
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Endpoint to fetch disaster data
app.get('/disasters', async (req, res) => {
    const options = {
			method: 'GET',
			url: 'https://api.ambeedata.com/disasters/latest/by-country-code',
			params: { countryCode: 'IND', limit: '10', page: '1' },
			headers: {
				'x-api-key':
					'2cc5572bae4bf7b6608387b4d1319dd3d6ddbe063cca6da0b534167818c54dcb',
				'Content-type': 'application/json',
			},
		};


    try {
        const response = await axios.request(options);
        res.json(response.data); // Send the API response back to the browser
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching data from Ambee API' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
