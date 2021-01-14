const mongoose =require('mongoose');

const rentalSchema = new mongoose.Schema(
  {
    item: { type: String, required: true },
    borrowingDays: { type: Number, required: true},
    vendor : { type: String, required: true}
  },
  { timestamps: true }
);

const Rentals = mongoose.model('Rentals', rentalSchema);
module.exports = Rentals;
