const cities = [
    { name: 'Rotterdam', country: 'Netherlands' },
    { name: 'Breda', country: 'Netherlands' },
    { name: 'Paris', country: 'France' },
    { name: 'Berlin', country: 'Germany' },
    { name: 'Düsseldorf', country: 'Germany' },
    { name: 'Gent', country: 'Belgium' },
    { name: 'Brussel', country: 'Belgium' },
    { name: 'Utrecht', country: 'Netherlands' }
];

// Bonus: Make sure the cities are sorted by name alphabetically
// Objective: Filter the cities so that they only contain cities in the Netherlands

let showFiltered = false; // Flag to track whether to show filtered or original cities

  const renderCities = (citiesArray) => {
    const citiesElement = document.getElementById('cities');
    citiesElement.innerHTML = ''; // Clear previous content

    citiesArray.forEach(city => {
      const dtElement = document.createElement('dt');
      dtElement.textContent = city.name;
      citiesElement.appendChild(dtElement);
      
      const ddElement = document.createElement('dd');
      ddElement.textContent = city.country;
      citiesElement.appendChild(ddElement);
    });
  };

// Get the filter button element
const filterButton = document.getElementById('filterButton');

// Add an event listener to the button to toggle between original and filtered cities
  filterButton.addEventListener('click', () => {
    showFiltered = !showFiltered; // Toggle the flag

    if (showFiltered) {
      const dutchCitiesSorted = cities
        .sort((a, b) => a.name.localeCompare(b.name))
        .filter(city => city.country === 'Netherlands')
        .map(city => ({ name: city.name, country: city.country }));

      renderCities(dutchCitiesSorted);
    } else {
      renderCities(cities);
    }
    
  });

// Initial render with the original cities array when the page loads
renderCities(cities);