const wetsuitSizeInfo = {
	male: [
		{
		weight: [40, 50],
		height: [151, 160],
		size: 'XS'
		},
		{
		weight: [61, 69],
		height: [168, 172],
		size: 'S'
		},
		{
		weight: [70, 77],
		height: [173, 178],
		size: 'M'
		},
		{
		weight: [78, 85],
		height: [178, 183],
		size: 'L'
		},
		{
		weight: [86, 93],
		height: [180, 188],
		size: 'XL'
		}
	]
}

const heightInput = document.querySelector('#height')
const weightInput = document.querySelector('#weight')
const submitBtn = document.querySelector('#submit-btn');
const result = document.querySelector('#result')
const selMale = document.querySelector('#selMale')
const selFemale = document.querySelector('#selFemale')

function wetsuitSizeGet(gender, weight, height) {
	if (!gender) {
		return alert('성별을 선택해 주세요')
	} else {
	const x = wetsuitSizeInfo[gender].find(element => 
		(weight >= element.weight[0] && weight <= element.weight[1]) &&
		(height >= element.height[0] && height <= element.height[1]));
		x? result.textContent = x.size: alert('해당 정보에 맞는 사이즈가 없습니다.');
	}
}

const genderValue = () => {
	let value = '';	
	if(selMale.checked) {
		value = 'male';
		return value;
	} else if (selFemale.checked) {
		value = 'female';
		return value;
	} 
}

submitBtn.addEventListener('click', () => {
	wetsuitSizeGet(genderValue(), weightInput.value, heightInput.value);
});
