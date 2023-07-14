// Import seed files
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

// Import Sequelize connection
const sequelize = require('../config/connection');

// Define the seedAll function
const seedAll = async () => {
  // Sync the database by dropping existing tables and re-creating them
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  // Seed categories
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  // Seed products
  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  // Seed tags
  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  // Seed product tags
  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  // Exit the process
  process.exit(0);
};

// Call the seedAll function to start the seeding process
seedAll();
