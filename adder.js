function adder(...nums) {
	//return (a || 0) + (b || 0) + (c || 0);
	return nums.reduce((total, num) => total + num, 0);
}

module.exports = adder;
