'use strict';

const profile = {
	username: 'Jacob',
	playTime: 300,
	changeUserName(newName) {
		this.username = newName;
	},
	updatePlayTime(hours) {
		this.playTime += hours;
	},
	getInfo() {
		return `${this.username} has ${this.playTime} active hours!`;
	},
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUserName('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
