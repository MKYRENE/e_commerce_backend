//1. Import necessary modules: Importing the required modules using the `require` function. It imports the `router` module from Express and the `Category` and `Product` models from the `../../models` path.
const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// The code sets up the router to handle requests to the `/api/categories` endpoint.
// find all categories
// be sure to include its associated Products
router.get('/', (req, res) => {

  Category.findAll()
    .then((categories) => {
      res.json(categories);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', (req, res) => {
  //findBypk is being use to search "category by id" if not found console.log 404 error message on the console.
  Category.findByPk(req.params.id, { include: [Product] })
    .then((category) => {
      if (!category) {
        res.status(404).json({ message: 'Category not found' });
      } else {
        res.json(category);
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//POST request created with category database utilizing create function bringing in category as paramater and a cb. 
//console log 201 successful message if not .catch for an error 
router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  
    .then((category) => {
      res.status(201).json(category);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: { id: req.params.id },
  })
    .then(([rowsAffected]) => {
      if (rowsAffected === 0) {
        res.status(404).json({ message: 'Category not found' });
      } else {
        res.json({ message: 'Category updated successfully' });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: { id: req.params.id },
  })
    .then((rowsAffected) => {
      if (rowsAffected === 0) {
        res.status(404).json({ message: 'Category not found' });
      } else {
        res.json({ message: 'Category deleted successfully' });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;



