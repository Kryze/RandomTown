class RandomTownManipulator {
    constructor(file) {
        this.json = file;
        console.log(this.json)
    }

    searchByName(name) {
        for (let i = 0; i < this.json.length; i++) {
            if (this.json[i] == name) {
                return this.json[i];
            }
        }
    }

    getRandom() {
        let randIndex = Math.floor(Math.random() * this.json.length);
        return this.json[randIndex];
    }
}

const TOWNS = new RandomTownManipulator(townsList);

function displayRandomTown() {
    displayTown(TOWNS.getRandom());
}

function displayTown(obj) {
    document.getElementById("town-name").innerText = obj.town;
    document.getElementById("country-name").innerText = obj.country;
    document.getElementById("description").innerText = obj.description;
    document.getElementById("picture").setAttribute("src", obj.pictureUrl);
    document.getElementById("contributor-name").innerText = "Contributed by: " + obj.contributor;
}


