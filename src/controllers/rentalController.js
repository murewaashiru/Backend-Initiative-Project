let rentalData = require('../database/rentals.json');

const createRental = async (req, res, next) => {
  try {
    let index = rentalData.length;
    const { item, borrowing_days, vendor} = req.body;
    if (!item && !borrowing_days && !vendor) 
      return res.send("You must supply for the following: 'item', 'borrowing_days' and 'vendor'");  

    var newRental = {
      "id": index + 1,
      item,
      borrowing_days,
      vendor     
    }

    rentalData.push(newRental);
    res.status(201).json({message:"Rental created successfully", rentalData});
  } catch (err) {
    return next(err);
  }
};

const getRental = (req, res, next) => {
  try {
    return res.status(200).json({message:"Rentals retrieved successfully", rentalData});
  } catch (err) {
    return next(err);
  }
};

const getRentalById = async (req, res, next) => {
  try {
    const {id}= req.params;
    if (id > rentalData.length || id <= 0) return res.status(404).send(`Rental with ID ${id} does not exist`);

    for (var i = 0; i < rentalData.length; i++) {
      if(rentalData[i].id == id){
          return res.status(200).json({message:`Rental ${req.params.id} retrieved successfully`, rentalData:rentalData[i] })
      }
  }
  } catch (err) {
    return next(err);
  }
};

const updateRental = async (req, res, next) => {
  try {
    const {id}= req.params;
    const { item, borrowing_days, vendor} = req.body;
    if (id > rentalData.length || id <= 0) return res.status(404).send(`Rental with ID ${id} does not exist`);

    if (!item || !borrowing_days || !vendor) 
    return res.send("You must supply for the following: 'item', 'borrowing_days' or 'vendor'");

    for (var i = 0; i < rentalData.length; i++) {
        if(rentalData[i].id == id){
            rentalData[i].item = item;
            rentalData[i].borrowing_days = borrowing_days;
            rentalData[i].vendor = vendor;
        }
    }

    return res.status(200).json({message:"Rental updated successfully", rentalData});
  } catch (err) {
    return next(err);
  }
};

const deleteRental = async (req, res, next) => {
  try {
    const {id}= req.params;
    if (id > rentalData.length || id <= 0) return res.status(404).send(`Rental with ID ${id} does not exist`);

    for (var i = 0; i < rentalData.length; i++) {
      if(rentalData[i].id == id){
        rentalData.splice(i, 1);
        return res.status(200).json({message:`Rental with ID ${id} deleted successfully`, rentalData});
      }
    }
  } catch (err) {
    return next(err);
  }
};

module.exports = { 
    createRental, getRental, getRentalById, updateRental, deleteRental
};
