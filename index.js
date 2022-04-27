const sizeInfo = {
	male: [
		{
		height: [167, 172],
		weight: [
			{
				range: [53, 60],
				size: 'XS'
			},
			{
				range: [61, 78],
				size: 'S'
			},
			{
				range: [69, 79],
				size: 'M'
			},
			{
				range: [77, 84],
				size: 'L'
			}
		]
		},
		{
		height: [173, 178],
		weight: [
			{
				range: [62, 69],
				size: 'S'
			},
			{
				range: [70, 77],
				size: 'M'
			},
			{
				range: [78, 85],
				size: 'L'
			},
			{
				range: [86, 93],
				size: 'XL'
			}
		]
		},
		{
		height: [179, 183],
		weight: [
			{
				range: [71, 78],
				size: 'M'
			},
			{
				range: [79, 86],
				size: 'L'
			},
			{
				range: [87, 94],
				size: 'XL'
			},
			{
				range: [95, 102],
				size: 'XXL'
			}
		]
		},
		{
			height: [184, 188],
			weight: [
				{
					range: [78, 85],
					size: 'L'
				},
				{
					range: [86, 93],
					size: 'XL'
				},
				{
					range: [94, 101],
					size: 'XXL'
				},
			]
			},
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
	const heightCatagory = sizeInfo[gender].find(element =>
		height >= element.height[0] && height <= element.height[1]);
		console.log(heightCatagory)
		if (!heightCatagory) {
			alert('해당 정보에 맞는 사이즈가 없습니다.')
		} else {
		const x = heightCatagory.weight.find(element =>
			weight >= element.range[0] && weight <= element.range[1]);
		x? result.textContent = x.size: alert('해당 정보에 맞는 사이즈가 없습니다.');
		}
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
