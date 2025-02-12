const baseUrl = "http://localhost:3001";

// Function to check the response
function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

// Generalized fetch function
function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

// API functions using request()
function getItems() {
  return request(`${baseUrl}/items`);
}

function addItem(item) {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
}

function deleteItem(itemId) {
  return request(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export { getItems, addItem, deleteItem, checkResponse };
