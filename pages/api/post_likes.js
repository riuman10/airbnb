import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(request, response) {
  const { database } = await connectToDatabase();
  const data = request.body;

  const postLike = await database.collection("likes").insertOne(data);

  const results = await database.collection("likes").find({}).limit(20).toArray();


  response.status(200).json(results);
}
