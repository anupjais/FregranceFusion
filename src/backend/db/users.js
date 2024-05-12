import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Anup",
    lastName: "Kumar",
    email: "amitoshjaiswal46@gmail.com",
    password: "Amitosh0000",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    address: [
      {
        _id: uuid(),
        name: "Anup Kumar",
        street: "KJ's Hostel, Saswad - Yewalewadi Rd",
        city: "Pune",
        state: "Maharashtra",
        zipcode: "411048",
        country: "India",
        mobile: "8709783682",
      },
      {
        _id: uuid(),
        name: "Ritu Raj Sharma",
        street: "KJ's Hostel, Saswad - Yewalewadi Rd",
        city: "Pune",
        state: "Maharashtra",
        zipcode: "411048",
        country: "India",
        mobile: "8709783682",
      },
    ],
  },
];
