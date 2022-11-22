import { db, sql } from "../pg";
import { userType, listingType } from "../types";


//add Hotel Listing
export async function createHotelListing(data: listingType) {
    try {
      return db
        .query(
          sql`INSERT INTO hotel_listing(description, image, num_of_beds, num_of_baths, rating, price, user_id) VALUES(${data.description}, ${data.image}, ${data.numOfBeds}, ${data.numOfBaths}, ${data.rating}, ${data.price}, ${data.userId}) RETURNING *`,
        )
        .then(([data]:any) => data);
    } catch (error: any) {
      return error.message;
    }
}

export async function createUser(data: userType) {
    try {
      return db
        .query(
          sql`INSERT INTO users(fullname, email, password, phone) VALUES(${data.fullName}, ${data.email}, ${data.password}, ${data.phoneNumber}) RETURNING *`,
        )
        .then(([data]:any) => data);
    } catch (error: any) {
      return error.message;
    }
}

export async function getUserById(id: string) {
    try {
      return db
        .query(sql`SELECT * FROM users WHERE users.id = ${id}`)
        .then(([data]:any) => data);
    } catch (error) {
      console.error(error);
      return -1;
    }
}


export async function getUserListing(id: string) {
    try {
      return db
        .query(sql`SELECT * FROM users 
        JOIN hotel_listing ON users.id = hotel_listing.id WHERE users.id = ${id}`)
        .then(([data]:any) => data);
    } catch (error) {
      console.error(error);
      return -1;
    }
  }