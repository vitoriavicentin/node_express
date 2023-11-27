
# Node Express Basic API

This is a basic Node.js and Express API project created for study purposes. The API provides routes for CRUD (Create, Read, Update, Delete) operations and an additional route called "list". The project utilizes the Body Parser, Cookie Parser, Express, and Multer packages to facilitate development.

## Prerequisites

Before you begin, make sure you have Node.js installed on your machine. You can download it [here](https://nodejs.org/).

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/node-express-basic-api.git
    ```

2. Navigate to the project directory:

    ```bash
    cd node-express-basic-api
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Configuration

Ensure you configure the environment variables in the `.env` file correctly. You can use the `.env.example` file as a reference.

## Usage

To start the server, run the following command:

```bash
npm start
```

The API will be available at [http://localhost:3000](http://localhost:3000).

## Routes

### GET /api
Returns a message indicating that the API is working.

### GET /api/list
Returns a list of items.

### POST /api
Creates a new item. Requires a JSON body with the item data.

### DELETE /api/:id
Deletes the item with the specified ID.

## Dependencies

- [Body Parser](https://www.npmjs.com/package/body-parser): ^1.20.2
- [Cookie Parser](https://www.npmjs.com/package/cookie-parser): ^1.4.6
- [Express](https://www.npmjs.com/package/express): ^4.18.2
- [Multer](https://www.npmjs.com/package/multer): ^1.4.5-lts.1

## Contribution

Contributions are welcome! Feel free to open issues and pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
