import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(request, response) {
  const { database } = await connectToDatabase();
  const data = request.body;

  const postLike = await database.collection("likes").insertOne(data);
  response.status(200).json({ message: "Data inserted successfully!" });
}
