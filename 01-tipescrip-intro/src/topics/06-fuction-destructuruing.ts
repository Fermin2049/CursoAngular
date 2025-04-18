export interface Product {
	desription: string;
	price: number;
}

const phone: Product = {
	desription: 'Nokia 3310',
	price: 100,
};
const tablet: Product = {
	desription: 'iPad Air',
	price: 200,
};

interface TaxCalculatorOptions {
	tax: number;
	products: Product[];
}

//function TaxCalculator(options: TaxCalculatorOptions): [number, number] {
export function TaxCalculator({
	tax,
	products,
}: TaxCalculatorOptions): [number, number] {
	let total = 0;
	products.forEach(({ price }) => {
		total += price;
	});

	return [total, total * tax];
}

const shopingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = TaxCalculator({
	products: shopingCart,
	tax,
});

//console.log('Total: ', total);
//console.log('Tax: ', taxTotal);
