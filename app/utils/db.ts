import mongoose from "mongoose";

const connect = async () => {
	const dbType = process.env.MONGO as string;
	try {
		await mongoose.connect(dbType);
	} catch (error) {
		throw new Error("Connection failed!");
	}
};

export default connect;

// import { NextApiRequest, NextApiResponse } from "next";
// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI as string; // Use MONGODB_URI environment variable

// const client = new MongoClient(uri);

// export default async function handler(
// 	req: NextApiRequest,
// 	res: NextApiResponse
// ) {
// 	try {
// 		await client.connect();
// 		const database = client.db("test"); // Replace with your database name
// 		const collection = database.collection("posts"); // Replace with your collection name
// 		const posts = await collection.find({}).toArray();

// 		res.status(200).json(posts);
// 	} catch (error) {
// 		res.status(500).json({ error: "Failed to fetch data" });
// 	} finally {
// 		await client.close();
// 	}
// }
