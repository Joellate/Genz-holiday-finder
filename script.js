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

        resultsArea.innerHTML = '<p>Loading holidays...</p>';

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
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
                    resultsArea.innerHTML = `<p>No public holidays found for ${countryCode} in ${searchYear}.</p>`;
                }
            })
            .catch(error => {
                resultsArea.innerHTML = `<p class="error">Error fetching holidays: ${error.message}</p>`;
            });
    });

    // Set the default year to the current year when the page loads
    yearInput.value = new Date().getFullYear();
});