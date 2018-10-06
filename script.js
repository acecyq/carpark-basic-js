// create carpark with 3 levels with 15 empty lots each
let carpark = {
	level1 : Array(15).fill(null),
	level2 : Array(15).fill(null),
	level3 : Array(15).fill(null)
}

const splitStr = (str) => {

	// splits a string into array
	return str.split(' ');
}

const fillLot = (level, vehicle) => {

	// iterate through lots in a level of carpark
	for (let i = 0; i < carpark[level].length; i++) {

		// if lot is empty, park car and return true
		if (carpark[level][i] === null) {
			carpark[level][i] = vehicle;
			console.log(`Please proceed to Level ${level.charAt(5)}, Spot ${i+1}.`);
			return true;
		}
	}

	// if lots all full, return false
	return false;
}

const carparkFull = () => {
	console.log(`Sorry carpark is full!`);
}

const emptyLot = (level, vehicle) => {

	// iterate through lots in a level of carpark
	for (let i = 0; i < carpark[level].length; i++) {

		// if lot has vehicle, say spot available and return true
		if (carpark[level][i] === vehicle) {
			carpark[level][i] = null;
			console.log(`Level ${level.charAt(5)}, Spot ${i + 1} is now available.`);
			return true;
		}
	}

	// if cannot find vehicle return false
	return false;
}

const parkCar = (str) => {

	// assign input to array split from str
	let input = splitStr(str);

	// if string starts with ENTRY
	if (input[0] === 'ENTRY') {

		// if vehicle is truck or bus
		if (input[1] === 'Truck' || input[1] === 'Bus') {

			// if cannot park at level 1
			if (!fillLot("level1", input[2])) {

				// say carpark is full
				carparkFull();
			}

		// if vehicle is car or motorcycle	
		} else if (input[1] === 'Car' || input[1] === 'Motorcycle') {

			// if cannot park at level 2
			if (!fillLot("level2", input[2])) {

				// and also cannot park at level 3
				if (!fillLot("level3", input[2])) {

					// say carpark is full
					carparkFull();
				}
			}
		} else {

			// if other vehicle type say no such parking
			console.log(`There is no parking lot for ${input[1]}.`);
		}

	// if string starts with EXIT
	} else if (input[0] === 'EXIT') {

		// for every level in carpark
		for (let level in carpark) {

			// if have vehicle, empty lot and return
			if (emptyLot(level, input[1])) {
				return;
			}
		}

		// say no such vehicle found
		console.log(`No such vehicle as ${input[1]} found.`);
	} else {
		console.log(`Please enter valid input`);
	}
}
