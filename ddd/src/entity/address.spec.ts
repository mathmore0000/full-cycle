import { Address } from './address';

describe('Address unit tests', () => {
	it('should throw error when street is empty', () => {
		expect(() => {
			let address = new Address('', 123, '12345-678', 'City');
		}).toThrow(Error('Street is required'));
	});

	it('should throw error when number is zero', () => {
		expect(() => {
			let address = new Address('Street', 0, '12345-678', 'City');
		}).toThrow(Error('Number is required'));
	});

	it('should throw error when zip is empty', () => {
		expect(() => {
			let address = new Address('Street', 123, '', 'City');
		}).toThrow(Error('Zip is required'));
	});

	it('should throw error when city is empty', () => {
		expect(() => {
			let address = new Address('Street', 123, '12345-678', '');
		}).toThrow(Error('City is required'));
	});

	it('should create address', () => {
		const address = new Address('Street', 123, '12345-678', 'City');
		expect(address._street).toBe('Street');
		expect(address._number).toBe(123);
		expect(address._zip).toBe('12345-678');
		expect(address._city).toBe('City');
	});

	it('should return address as string', () => {
		const address = new Address('Street', 123, '12345-678', 'City');
		expect(address.toString()).toBe('Street, 123, 12345-678, City');
	});

});