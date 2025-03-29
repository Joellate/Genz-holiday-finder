# Trendy Holiday Vibes

A simple web application to find public holidays for different countries around the world.

## How to Run

1.  Save the `index.html`, `style.css`, and `script.js` files in the same folder on your local computer.
2.  Open the `index.html` file in any web browser (Chrome, Firefox, Safari, Edge, etc.).

## API Used

This application utilizes the [Nager.Date API](https://date.nager.at/api/v3/PublicHolidays/{year}/{countryCode}) to fetch public holiday data.

## Functionality

The user can enter a two-letter country code (e.g., US, CA, GB) and a year. Upon clicking the "Get Holiday Vibes" button, the application will query the Nager.Date API and display a list of public holidays for the specified country and year. If no holidays are found or if there is an error fetching the data, an appropriate message will be displayed.

## Known Issues and Limitations

* The availability and accuracy of public holiday data depend on the Nager.Date API. Some countries or specific years might have incomplete or missing data. For example, you might not find data for every country.
* Basic error handling for API requests and JSON parsing is implemented.

## Conceptual Deployment Plan

To deploy this web application to the provided servers Web01 and Web02 with a load balancer Lb01, the following steps would be taken:

1.  **Transfer Files:** The `index.html`, `style.css`, and `script.js` files would be transferred to both Web01 and Web02. This could be done using tools like `scp` or `rsync`.
2.  **Web Server Configuration:** A web server (such as Nginx or Apache) would need to be installed and configured on both Web01 and Web02 to serve these static files. The web server would be set to listen on standard HTTP port 80 (or HTTPS port 443 if SSL is configured).
3.  **Configure Load Balancer (Lb01 - IP: 52.87.163.802):** The load balancer would be configured to direct traffic to the backend servers:
    * **Web01:** 44.202.1.224 (listening on port 80)
    * **Web02:** 3.91.57.170 (listening on port 80)
    ##Demo video
    <video controls src="Trendy Holiday Vibes - Personal - Microsoft​ Edge 2025-03-29 20-06-14.mp4" title="Title"></video>

## Author

TJ