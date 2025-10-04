// fetch-data.js

// Define an asynchronous function to fetch and display user data
async function fetchUserData() {
    // API endpoint for fetching user data
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Get the container element where data will be displayed
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Parse the JSON response into a JavaScript object
        const users = await response.json();
        
        // Clear the loading message
        dataContainer.innerHTML = '';
        
        // Create an unordered list element for displaying users
        const userList = document.createElement('ul');
        
        // Loop through each user and create list items
        users.forEach(user => {
            // Create a list item for each user
            const listItem = document.createElement('li');
            // Set the text content to the user's name
            listItem.textContent = user.name;
            // Append the list item to the unordered list
            userList.appendChild(listItem);
        });
        
        // Append the completed list to the data container
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Handle any errors that occur during fetch or processing
        console.error('Error fetching user data:', error);
        // Clear existing content and show error message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Execute the fetch function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);