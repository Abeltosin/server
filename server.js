const http = require('http');
const fs = require('fs');
const path = require('path');

// File path for storing JSON data (db.json)
const dataFilePath = path.join(__dirname, 'db.json');

// Helper function to read JSON data from file
const readDataFromFile = () => {
    const jsonData = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(jsonData);
};

// Helper function to write JSON data to file
const writeDataToFile = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

// Create a server
const server = http.createServer((req, res) => {
    // Set response headers
    res.setHeader('Content-Type', 'application/json');

    // Handle GET requests (Read operation)
    if (req.method === 'GET') {
        const data = readDataFromFile();
        res.end(JSON.stringify(data));
    }
    // Handle POST requests (Create operation)
    else if (req.method === 'POST') {
        // Implementation for POST request
    }
    // Handle PUT requests (Update operation)
    else if (req.method === 'PUT') {
        // Implementation for PUT request
    }
    // Handle DELETE requests (Delete operation)
    else if (req.method === 'DELETE') {
        // Implementation for DELETE request
    }
    // Handle other HTTP methods
    else {
        res.statusCode = 405; // Method Not Allowed
        res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
