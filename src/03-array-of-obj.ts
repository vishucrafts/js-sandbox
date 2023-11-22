type Product = {
	name: string;
	price: string;
	discount: number;
	manufacturingDate: Date;
};

// Array of products
// In memory => 0x1200
let products: Product[] = [
	{
		name: "TV",
		price: "1000",
		discount: 10,
		manufacturingDate: new Date(12, 12, 2020),
	},
	{
		name: "Mobile",
		price: "500",
		discount: 5,
		manufacturingDate: new Date(12, 12, 2020),
	},
];
