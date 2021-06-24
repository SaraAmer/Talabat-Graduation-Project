// const AddressSchema = new mongoose.Schema({
//   _userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: 'User',
//   },
//   mobile: {
//     type: String,
//     required: true,
//     unique: false,
//   },
//   landing:{
//     type: String,
//     required: true,
//     unique: false,
//   }
//   street: {
//     type: String,
//     required: true,
//     unique: false,
//   },
//   country: {
//     type: String,
//     required: true,
//     unique: false,
//   },
//     region: {
//     type: String,
//     required: true,
//     unique: false,
//   },
//   floor: {
//     type: String,
//     required: false,
//     unique: false,
//   },
//   building: {
//     type: String,
//     required: true,
//     unique: false,
//   },
//     apartmentN: {
//     type: String,
//     required: false,
//     unique: false,
//   },
//    addressTitle: {
//     type: String,
//     required: false,
//     unique: false,
//   },
//   assitionalDirect:{
//     type: String,
//     required: false,
//     unique: false,
//   }
//    type:{
//     type: String,
//     required: false,
//     unique: false,
//   }
  
// });

// const Address = mongoose.model('Address', AddressSchema);

// exports.Address = Address;