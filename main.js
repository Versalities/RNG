const startButton = document.getElementById('start');
const reloadButton = document.getElementById('reload');

startButton.addEventListener('click', roll);

function setResult(roll, i) {
	const imgFrame = document.getElementsByClassName('img-frame')[i];
	const resultFrame = document.getElementsByClassName('roll-result')[i];

	if (roll < 11) {
		imgFrame.style.content = "url('img/Gold.png')";
	} else if (roll > 10 && roll < 41) {
		imgFrame.style.content = "url('img/Silver.png')";
	} else {
		imgFrame.style.content = "url('img/Bronze.png')";
	}

	resultFrame.innerHTML = `Roll Chance: ${roll}%`
}

function roll() {
	resetResults();

	let i = 0;
	let sum = 0;
	const int = setInterval(rollTheDice, 666);

	function rollTheDice() {
		if (i === 6) {
			clearInterval(int);
			setOverallResult(sum);
		} else {
			const roll = Math.floor((Math.random() * 100) + 1);

			sum += roll;
			animateItem(i++, roll);
		}
	}
}

function animateItem(i, roll) {
	const tab = document.getElementsByClassName('img-frame')[i];
	let rotationDegrees = 0;
	const animationSequence = setInterval(rotate, 24);

	function rotate() {
		if (rotationDegrees === 720) {
			clearInterval(animationSequence);
		} else {
			if (rotationDegrees >= 564) {
				setResult(roll, i);
			}

			if (rotationDegrees <= 120 || rotationDegrees >= 600) {
				rotationDegrees += 6;
			} else {
				rotationDegrees += 12;
			}

			tab.style.transform = `rotateY(${rotationDegrees}deg)`;
		}
	}
}

function setOverallResult(sum) {
	const resultFrame = document.getElementById('result-frame');
	const averageProcChance = Math.floor(sum / 6);

	if (averageProcChance < 21) {
		resultFrame.innerHTML = "Very impressive luck!";
	} else if (averageProcChance > 20 && averageProcChance < 41) {
		resultFrame.innerHTML = "Above average. Decent luck";
	} else {
		resultFrame.innerHTML = "Pretty normal. Nothing to write home about";
	}
}

function resetResults() {
	const imgFrameList = document.getElementsByClassName('img-frame');
	const resultFrameList = document.getElementsByClassName('roll-result');

	for (let i = 0; i < imgFrameList.length; i++) {
		imgFrameList[i].removeAttribute('style');
		resultFrameList.innerHTML = "Roll Chance";
	}

}