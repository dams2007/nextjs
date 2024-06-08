const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const get = async (url: string, placeholder: boolean) => {
	const response = await fetch(`${placeholder ? url : baseURL + url}`);

	if (!response.ok) {
		throw new Error("Failed to fetch data.");
	}
	const data = (await response.json()) as unknown;
	return data;
};

export default get;
