// Initialize the Google Map
function fetchGoogleRating(placeId, elementId) {
  fetch(`http://localhost:3000/api/place-details?place_id=${placeId}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.result && data.result.rating) {
        document.getElementById(elementId).innerText = `Rating: ${data.result.rating} ⭐`;
      } else {
        document.getElementById(elementId).innerText = "Rating unavailable";
      }
    })
    .catch((error) => console.error("Error fetching Google rating:", error));
}

// Fetch ratings for each location
fetchGoogleRating('ChIJwQhsOk3q9EcRMijKMemtSMo', 'hotel-de-ville-rating');
fetchGoogleRating('ChIJAXyq5_3q9EcRRbsKvW-eoWM', 'henri-iv-rating');



function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 45.7691736, lng: 4.8315961 }, // Lyon center
    zoom: 13,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
      { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
    ],
  });

  const locations = [
    { lat: 45.7691736, lng: 4.8315961, title: "Two Amigos Hotel de Ville" },
    { lat: 45.7529385, lng: 4.8283705, title: "Two Amigos Henri IV" },
  ];

  locations.forEach((location) => {
    new google.maps.Marker({
      position: location,
      map: map,
      title: location.title,
      icon: {
        url: "images/logo.png", // Path to your marker logo
        scaledSize: new google.maps.Size(40, 40),
      },
    });
  });
}
// Dropdown toggle functionality
document.querySelectorAll('.dropdown-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);
    content.style.display = expanded ? 'none' : 'block';
  });
});