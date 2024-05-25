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
