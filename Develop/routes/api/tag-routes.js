const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET all tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({ include: [Product] }); // Find all tags and include associated product data
    res.json(tags); // Send the tags as a JSON response
  } catch (err) {
    res.status(500).json(err); // Handle any errors and send a 500 status code with the error message
  }
});

// GET a single tag by ID
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, { include: [Product] }); // Find a tag by its ID and include associated product data

    if (!tag) {
      res.status(404).json({ message: 'Tag not found' }); // If no tag is found, send a 404 status code with an error message
    } else {
      res.json(tag); // Send the tag as a JSON response
    }
  } catch (err) {
    res.status(500).json(err); // Handle any errors and send a 500 status code with the error message
  }
});

// POST a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = req.body; // Get the tag data from the request body
    const tag = await Tag.create(tagData); // Create a new tag with the provided data
    res.status(201).json(tag); // Send a 201 status code (Created) with the created tag as a JSON response
  } catch (err) {
    res.status(500).json(err); // Handle any errors and send a 500 status code with the error message
  }
});

// PUT (update) a tag by ID
router.put('/:id', async (req, res) => {
  try {
    const tagData = req.body; // Get the updated tag data from the request body
    const [rowsAffected] = await Tag.update(tagData, { where: { id: req.params.id } }); // Update the tag with the provided data based on its ID

    if (rowsAffected === 0) {
      res.status(404).json({ message: 'Tag not found' }); // If no rows were affected, send a 404 status code with an error message
    } else {
      res.json({ message: 'Tag updated successfully' }); // Send a success message as a JSON response
    }
  } catch (err) {
    res.status(500).json(err); // Handle any errors and send a 500 status code with the error message
  }
});

// DELETE a tag by ID
router.delete('/:id', async (req, res) => {
  try {
    const rowsAffected = await Tag.destroy({ where: { id: req.params.id } }); // Delete the tag with the provided ID

    if (rowsAffected === 0) {
      res.status(404).json({ message: 'Tag not found' }); // If no rows were affected, send a 404 status code with an error message
    } else {
      res.json({ message: 'Tag deleted successfully' }); // Send a success message as a JSON response
    }
  } catch (err) {
    res.status(500).json(err); // Handle any errors and send a 500 status code with the error message
  }
});

module.exports = router;
