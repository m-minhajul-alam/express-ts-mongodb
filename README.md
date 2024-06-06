# Express TypeScript MongoDB API

This is a RESTful API built with Express, TypeScript, and MongoDB for managing products and orders in an e-commerce application.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Request/Response Formats](#requestresponse-formats)
- [Error Handling](#error-handling)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd express-ts-mongodb
```

2. Install dependencies:

```bash
npm install
```

3. Set up a MongoDB database and update the connection string in server.ts.

4. Build and start the server:

```bash
npm run build
npm start
```

## Usage
The API server will start on port 3000 by default. You can then access the API endpoints using a tool like Postman or by sending HTTP requests from your application.

## API Endpoints

# Products
- POST /api/products: Create a new product.
- GET /api/products: Retrieve a list of all products.
- GET /api/products/:productId: Retrieve a specific product by ID.
- PUT /api/products/:productId: Update product information.
- DELETE /api/products/:productId: Delete a product.
- GET /api/products?searchTerm=iphone: Search for products.

# Orders
- POST /api/orders: Create a new order.
- GET /api/orders: Retrieve all orders.
- GET /api/orders?email=user@example.com: Retrieve orders by user email.

## Request/Response Formats

# Product
```json
{
  "name": "iPhone 13",
  "description": "A sleek and powerful smartphone with cutting-edge features.",
  "price": 999,
  "category": "Electronics",
  "tags": ["smartphone", "Apple", "iOS"],
  "variants": [
    {
      "type": "Color",
      "value": "Midnight Blue"
    }
  ],
  "inventory": {
    "quantity": 50,
    "inStock": true
  }
}
```

# Order
```json
{
  "email": "user@example.com",
  "productId": "5fd67e890b60c903cd8544a3",
  "price": 999,
  "quantity": 1
}
```

## Error Handling
The API handles errors gracefully and returns meaningful error messages in the response. Error responses include:

- 400 Bad Request: When the request is invalid.
- 404 Not Found: When a requested resource is not found.
- 500 Internal Server Error: When an unexpected error occurs on the server.

## Documentation
For detailed documentation of API endpoints, request/response formats, and error handling, refer to the source code and inline comments in the controllers and routes.