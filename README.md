Weather App 🌤️

A dynamic weather application that allows users to search for weather information by city name. The app provides real-time weather updates, dynamically changes the background based on weather conditions, and offers a seamless and responsive user experience.

Features

	•	🌎 City Search: Enter any city name to get current weather details.
	•	🌤️ Dynamic Backgrounds: Background image changes based on the weather condition (e.g., sunny, cloudy, rainy).
	•	🔄 Real-Time Updates: Fetches live weather data using the Weatherstack API.
	•	📋 City Suggestions: Provides a dropdown of matching city names while typing.
	•	💻 Responsive Design: Optimized for all screen sizes with a clean and modern UI.

Technologies Used

	•	HTML5: Structure and content.
	•	CSS3: Styling and layout, including responsive design.
	•	JavaScript (ES6): Dynamic functionality and API integration.
	•	Weatherstack API: Real-time weather data.

Setup and Installation

	1.	Clone the Repository:

git clone https://github.com/bkanumur/Weather-App.git
cd Weather-App


	2.	Add Your Weatherstack API Key:
	•	Open index.js.
	•	Replace 12f2ebab3a1b7ebf6d5fde55e29fe609 with your own API key.
	3.	Run the Application:
	•	Open the index.html file in any web browser.

Folder Structure

weather-app/
│
├── index.html          # Main HTML file
├── style.css           # CSS for styling
├── index.js            # JavaScript for functionality
├── images/             # Folder for background images
│   ├── clear.jpg       # Clear weather background
│   ├── clouds.jpg      # Cloudy weather background
│   ├── rain.jpg        # Rainy weather background
│   ├── snow.jpg        # Snowy weather background
│   ├── thunderstorm.jpg # Thunderstorm background
│   ├── drizzle.jpg     # Drizzle weather background
│   ├── default.jpg     # Default background

Usage

	1.	Search for a City:
	•	Type the city name (e.g., “Boston”) in the input field.
	•	Suggestions will appear in a dropdown as you type.
	•	Select a suggestion or press “Get Weather.”
	2.	View Weather Details:
	•	Temperature
	•	Weather description
	•	Feels like temperature
	•	Humidity
	•	Wind speed
	3.	Dynamic Backgrounds:
	•	The background image automatically updates based on the weather condition of the selected city.

API Reference

	•	API Service: Weatherstack
	•	Endpoint: http://api.weatherstack.com/current
	•	Parameters:
	•	access_key: Your API key.
	•	query: City name.

Screenshots

1. Search and Suggestions

2. Weather Details with Background

Future Enhancements

	•	🌐 Add multilingual support for city names.
	•	📅 Display a 7-day weather forecast.
	•	📍 Integrate geolocation to detect the user’s current location.

License

This project is open-source and available under the MIT License.
