import { Product, TaxCalculator } from './06-fuction-destructuruing';

const shoppinCart: Product[] = [
	{
		desription: 'Nokia 3310',
		price: 100,
	},
	{
		desription: 'iPad Air',
		price: 200,
	},
];

const [total, tax] = TaxCalculator({
	tax: 0.15,
	products: shoppinCart,
});
console.log('Total: ', total);
console.log('Tax: ', tax);
