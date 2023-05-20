const express = require('express')
const router = express.Router()
const {Dinner, Recipe} = require ('../models/Dinner.js')

router.get('/', (req, res) => {
    Dinner.find(req.query)
    //'then' happens if find is succesful
    .then(dinners => {
      console.log("succesfully got entire db!")
      console.log(dinners)
      res.json(dinners)
    })
    //if theres an error, 'catch' happens instead
    .catch(err => {
      console.error(err) 
      res.json(err)
    })
})

router.get('/get/recipe', (req, res) => {
  Recipe.find(req.query)
  //'then' happens if find is succesful
  .then(recipe => {
    console.log("succesfully got entire db!")
    console.log(recipe)
    res.json(recipe)
  })
  //if theres an error, 'catch' happens instead
  .catch(err => {
    console.error(err) 
    res.json(err)
  })
})

//we will be using the '/add' to do a POST request
router.post('/add', (req, res) => {
  Dinner.create(req.body)
    .then(dinner => {
      console.log(dinner)
      res.send(dinner)
    })
    .catch(err => {
      console.error(err)
      res.json(err)
    })
})
router.post('/add/recipe', (req, res) => {
  Recipe.create(req.body) 
    .then(recipe => {
      console.log(recipe)
      res.send(recipe)
    })
    .catch(err => {
      console.error(err)
      res.json(err)
    })
})

router.put('/:id', (req, res) => {
    Dinner.findByIdAndUpdate(req.params.id, req.body)
      .then(updated => {
        // returns the previously saved model
        res.send(updated)
      })
      .catch(err => {
        res.json(err)
      })
})
router.put('/:id/recipe', (req, res) => {
  Recipe.findByIdAndUpdate(req.params.id, req.body)
    .then(updated => {
      // returns the previously saved model
      res.send(updated)
    })
    .catch(err => {
      res.json(err)
    })
})

router.put('/dinner/:dinnerId/:recipeId', (req, res) => {
  const Recipe = Recipe.findById (req.params.recipeId)
  const Dinner = Dinner.findById (req.params.dinnerId)
  Promise.all ([Recipe, Dinner]).then((values) => {
    console.log(values);
  });
})

router.delete('/:id', (req, res) => {
  Dinner.findByIdAndDelete(req.params.id)
  .then(deleted => {
    res.send(deleted)
  })
  .catch(err => {
    res.json(err)
  })
})
router.delete('/:id/recipe', (req, res) => {
  Recipe.findByIdAndDelete(req.params.id)
  .then(deleted => {
    res.send(deleted)
  })
  .catch(err => {
    res.json(err)
  })
})

module.exports = router
