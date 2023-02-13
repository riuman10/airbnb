import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res) {
  let { db } = await connectToDatabase();
  const listings = await db.collection("listingsAndReviews").find({}).limit(20).toArray();
  res.status(200).json({ listings });
}
