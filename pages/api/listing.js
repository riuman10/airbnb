import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(request, response) {
    const { database } = await connectToDatabase();
    const results = await database.collection("listingsAndReviews").find({}).limit(20).toArray();
    response.status(200).json({results});

}