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
3.  **Load Balancer Configuration (Lb01):** The load balancer Lb01 would be configured to distribute incoming HTTP (or HTTPS) traffic across the IP addresses of Web01 and Web02. This would typically involve:
    * Defining the backend servers (Web01 and Web02 with their respective IP addresses and ports).
    * Setting up a load balancing algorithm (e.g., round-robin, least connections).
    * Configuring health checks to ensure traffic is only directed to healthy servers.
    * Pointing the application's domain name to the IP address of the load balancer.

## Author

TJ