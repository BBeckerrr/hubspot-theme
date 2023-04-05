// Get references to the HTML elements
const pricingSwitch = document.getElementById("pricing-switch");
const pricingText = document.getElementById("pricing-text");
const monthlyPrice1 = document.getElementById("monthly-price-1");
const annualPrice1 = document.getElementById("annual-price-1");
const monthlyPrice2 = document.getElementById("monthly-price-2");
const annualPrice2 = document.getElementById("annual-price-2");
const monthlyPrice3 = document.getElementById("monthly-price-3");
const annualPrice3 = document.getElementById("annual-price-3");
const packages = document.querySelectorAll(".package");

// Function to update the pricing text based on the pricing switch
function updatePricingText() {
  if (pricingSwitch.checked) {
    monthlyPrice1.style.display = "none";
    annualPrice1.style.display = "inline";
    monthlyPrice2.style.display = "none";
    annualPrice2.style.display = "inline";
    monthlyPrice3.style.display = "none";
    annualPrice3.style.display = "inline";
  } else {
    monthlyPrice1.style.display = "inline";
    annualPrice1.style.display = "none";
    monthlyPrice2.style.display = "inline";
    annualPrice2.style.display = "none";
    monthlyPrice3.style.display = "inline";
    annualPrice3.style.display = "none";
  }
}

// Add an event listener to the pricing switch
pricingSwitch.addEventListener("change", updatePricingText);

// Call the updatePricingText() function when the page loads to set the default pricing option
updatePricingText();

// Function to handle package selection
function selectPackage(event) {
  // Remove the "selected" class from all packages
  packages.forEach((package) => {
    package.classList.remove("selected");
  });
  // Add the "selected" class to the clicked package
  event.currentTarget.classList.add("selected");
}

// Loop through all packages and add a click event listener to each one
packages.forEach((package) => {
  package.addEventListener("click", selectPackage);
});


// Step 2 JavaScript

// Box 2: Range Slider
const rangeInput = document.querySelector('#range-input');
const rangeValue = document.querySelector('#range-value');

rangeInput.addEventListener('input', () => {
  const value = rangeInput.value;
  const unit = 'km';
  rangeValue.innerHTML = `${value}${unit}`;
});

// Box 3: Google Map
let map;

function initMap() {
  const geocoder = new google.maps.Geocoder();
  const mapOptions = {
    zoom: 8,
    center: {lat: 52.3667, lng: 4.8945} // Default center point for the map
  };
  const map = new google.maps.Map(document.getElementById('map'), mapOptions);
  const address = document.getElementById('postcode').value;

  geocoder.geocode({ 'address': address }, function (results, status) {
    if (status == 'OK') {
      const location = results[0].geometry.location;
      const lat = location.lat();
      const lng = location.lng();

      map.setCenter(location);

      const circleOptions = {
        strokeColor: '#0000FF',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#0000FF',
        fillOpacity: 0.35,
        map: map,
        center: {lat: lat, lng: lng},
        radius: parseInt(document.getElementById('radius').value) * 1000
      };
      const circle = new google.maps.Circle(circleOptions);
    } else {
      console.log('Geocode was not successful for the following reason: ' + status);
    }
  });
}

// Box 4: Slider
const sliderInput = document.querySelector('#slider-input');
const sliderValue = document.querySelector('#slider-value');

const prices = {
  'goed': 10,
  'beter': 20,
  'uitstekend': 30,
  'top': 40,
  'perfect': 50,
  'ultra': 60,
};

sliderInput.addEventListener('input', () => {
  const value = sliderInput.value;
  const price = prices[value];
  const increase = price * 0.1;
  sliderValue.innerHTML = `€${(price + increase).toFixed(2)} / maand`;
});

