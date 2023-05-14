const express = require("express");
const router = express.Router();
const {Income} = require('../models/IncomeModel');
const {Expence} = require('../models/ExpenceModel');


//Income routes *************************************************

//Posting data 
router.get(`/get-income`, async (req, res) => {
    const incomeList = await Income.find().sort({ createdAt: -1 });
  
    //if a error come
    if (!incomeList) {
      res.status(500).json({ success: false });
    }
  
    res.send(incomeList);
  });


//creating a new model of that Income
router.post(`/add-income`, (req, res) => {
  const { title, amount, category, description, date } = req.body;
    const income = new Income({
        title: req.body.title,
        amount: req.body.amount,
        type: req.body.type,
        date: req.body.date,
        category: req.body.category,
        description: req.body.description,
        timestamps: req.body.timestamps
    });
    
    //Saving model in the database
    income
      .save()
      .then((createdIncome) => {
        res.status(201).json(createdIncome);
      })
      .catch((err) => {
        if(!title || !amount || !category || !description || !date){
          return res
          .status(400)
          .json({ message: 'All fields are required!'});
        }
        else if(amount <= 0 || isNaN(amount)){
          return res
          .status(400)
          .json({ message: 'Amount should be a positive number!'});
      }
        else {
        res.status(500).json({ 
        error: err,
        success: false,
        });
      }
      });
  });

    //Editing a data
    router.put('/update-income/:id', async (req, res) => {
      const id = req.params.id;
      try {
        const updateIncome = await Income.findByIdAndUpdate(id, req.body, { new: true });
        res.send(updateIncome);
      } catch (error) {
        res.status(400).send(error.message);
      }
    });
  
    //Deleting an entry
  router.delete('/delete-income/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const deleteIncome = await Income.findByIdAndDelete(id);
      res.send(deleteIncome);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });



  //Expence routes *************************************************

//Posting data 
router.get(`/get-expence`, async (req, res) => {
  const expenceList = await Expence.find().sort({ createdAt: -1 });

  //if a error come
  if (!expenceList) {
    res.status(500).json({ success: false });
  }

  res.send(expenceList);
});


//creating a new model of that Expence
router.post(`/add-expence`, (req, res) => {
const { title, amount, category, description, date } = req.body;
  const expence = new Expence({
      title: req.body.title,
      amount: req.body.amount,
      type: req.body.type,
      date: req.body.date,
      category: req.body.category,
      description: req.body.description,
      timestamps: req.body.timestamps
  });
  
  //Saving model in the database
  expence
    .save()
    .then((createdExpence) => {
      res.status(201).json(createdExpence);
    })
    .catch((err) => {
      if(!title || !amount || !category || !description || !date){
        return res
        .status(400)
        .json({ message: 'All fields are required!'});
      }
      else if(amount <= 0 || isNaN(amount)){
        return res
        .status(400)
        .json({ message: 'Amount should be a positive number!'});
    }
      else {
      res.status(500).json({ 
      error: err,
      success: false,
      });
    }
    });
});

  //Editing a data
  router.put('/update-expence/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const updateExpence = await Expence.findByIdAndUpdate(id, req.body, { new: true });
      res.send(updateExpence);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

  //Deleting an entry
router.delete('/delete-expence/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deleteExpence = await Expence.findByIdAndDelete(id);
    res.send(deleteExpence);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//All clear *************************************************

module.exports = router;