document.addEventListener('DOMContentLoaded', () => {
    const countryInput = document.getElementById('country');
    const yearInput = document.getElementById('year');
    const searchButton = document.getElementById('searchButton');
    const resultsArea = document.getElementById('results-area');

    searchButton.addEventListener('click', () => {
        const countryCode = countryInput.value.toUpperCase().trim();
        const year = yearInput.value.trim();
        const currentYear = new Date().getFullYear();
        const searchYear = year || currentYear;

        if (!countryCode) {
            resultsArea.innerHTML = '<p class="error">Please enter a country code.</p>';
            return;
        }

        const apiUrl = `https://date.nager.at/api/v3/PublicHolidays/${searchYear}/${countryCode}`;

        resultsArea.innerHTML = '<p>Loading holiday information...</p>';

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => {
                        throw new Error(`API error! Status: ${response.status}, Response: ${text}`);
                    });
                }
                return response.json();
            })
            .then(holidays => {
                resultsArea.innerHTML = '';
                if (holidays && holidays.length > 0) {
                    const holidaysList = document.createElement('ul');
                    holidays.forEach(holiday => {
                        const listItem = document.createElement('li');
                        listItem.classList.add('holiday-item');
                        listItem.textContent = `${holiday.date}: ${holiday.localName}`;
                        holidaysList.appendChild(listItem);
                    });
                    const heading = document.createElement('h2');
                    heading.textContent = `Holidays in ${countryCode} for ${searchYear}`;
                    resultsArea.appendChild(heading);
                    resultsArea.appendChild(holidaysList);
                } else {
                    resultsArea.innerHTML = `<p>Sorry, public holiday information for ${countryCode} in ${searchYear} is not currently available.</p>`;
                }
            })
            .catch(error => {
                console.error("Error fetching holidays:", error);
                let friendlyErrorMessage = `An error occurred while fetching holiday data. Please try again or check if the country code is valid.`;
                if (error.message.includes("404")) {
                    friendlyErrorMessage = `Sorry, public holiday information for ${countryCode} in ${searchYear} could not be found.`;
                }
                resultsArea.innerHTML = `<p class="error">${friendlyErrorMessage}</p>`;
            });
    });

    yearInput.value = new Date().getFullYear();
});