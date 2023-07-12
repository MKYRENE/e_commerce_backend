# E-commerce Back End

This is the back end for an e-commerce website built using Express.js and Sequelize. It provides API routes to manage categories, products, and tags in a MySQL database.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the required dependencies.

## Usage

1. Create a `.env` file in the root directory and provide the following environment variables:
   - `DB_NAME` - The name of your MySQL database.
   - `DB_USER` - Your MySQL username.
   - `DB_PW` - Your MySQL password.
2. Run the schema.sql file in the MySQL shell to create the database:
3. (Optional) Run the seed data to populate the database with test data:
4. Start the server by running `npm start`.
5. Use an API testing tool like Insomnia Core to interact with the API endpoints.
6. The API routes can be accessed at `http://localhost:3001/api`.

## Database Models

The database contains the following four models:

### Category

- `id` (Integer, Primary Key, Auto Increment, Not Null)
- `category_name` (String, Not Null)

### Product

- `id` (Integer, Primary Key, Auto Increment, Not Null)
- `product_name` (String, Not Null)
- `price` (Decimal, Not Null, Validated as Decimal)
- `stock` (Integer, Not Null, Default Value: 10, Validated as Numeric)
- `category_id` (Integer, References category model's id)

### Tag

- `id` (Integer, Primary Key, Auto Increment, Not Null)
- `tag_name` (String, Not Null)

### ProductTag

- `id` (Integer, Primary Key, Auto Increment, Not Null)
- `product_id` (Integer, References product model's id)
- `tag_id` (Integer, References tag model's id)

## API Routes

- `GET /api/categories` - Get all categories.
- `GET /api/categories/:id` - Get a category by ID.
- `POST /api/categories` - Create a new category.
- `PUT /api/categories/:id` - Update a category.
- `DELETE /api/categories/:id` - Delete a category.

- `GET /api/products` - Get all products.
- `GET /api/products/:id` - Get a product by ID.
- `POST /api/products` - Create a new product.
- `PUT /api/products/:id` - Update a product.
- `DELETE /api/products/:id` - Delete a product.

- `GET /api/tags` - Get all tags.
- `GET /api/tags/:id` - Get a tag by ID.
- `POST /api/tags` - Create a new tag.
- `PUT /api/tags/:id` - Update a tag.
- `DELETE /api/tags/:id` - Delete a tag.

## Walkthrough Video

[Link to the Walkthrough Video](insert-link-here)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to create an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
