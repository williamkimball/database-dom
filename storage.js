// Define the database as an object
const HomeInventoryDatabase = {};
// Define the arrays (a.k.a. tables) in the database to store each type of items
HomeInventoryDatabase.furniture = [];
HomeInventoryDatabase.crafts = [];
HomeInventoryDatabase.electronics = [];

// The ink well is a craft data item
const vintageInkwell = {
    name: "Ink Bottle",
    location: "Typewriter desk",
    description: "This is a bottle of Diamine Majestic Blue; my favorite ink."
  }

  const typingDesk = {
    name: "Typewriter Desk",
    location: "Bedroom",
    description: "This antique desk is special because I found and purchased in North Louisiana early one morning in the winter."
  }

  const fountainPen = {
      name: "Parker '51'",
      location: "Pen case",
      description: "This is a 1946 Parker '51' Aero with a factory medium nib, and in the Ultra-rare color plum."
  }

  const bookshelf = {
    name: "Ikea Bookshelf",
    location: "Bedroom",
    description: "This is an Ikea bookshelf. It has some crazy Swedish name."
}

const vintageFan = {
    name: "Vintage Fan",
    location: "Closet",
    description: "This is a vintage brass-bladed fan from the 30's. It's super dangerous."
}
const computer = {
    name: "Macbook Pro",
    location: "Desk",
    description: "This is a 2017 Macbook pro 13 inch."
}
const gameCube = {
    name: "Nintendo GameCube",
    location: "Bookshelf",
    description: "This is a Nintendo GameCube. It plays games."
}
const book = {
    name: "Sabriel",
    location: "Bedside table",
    description: "This is a signed copy of Sabriel by Garth Nix."
}
const ghibliMovies = {
    name: "Studio Ghibli Collection",
    location: "Bookshelf",
    description: "This is a collection of most Studio Ghibli movies on Blu-ray."
}
const trainAd = {
    name: "Vintage train ad",
    location: "Wall",
    description: "This is a vintage ad for a steam locomotive."
}

HomeInventoryDatabase.crafts.push(vintageInkwell, fountainPen, trainAd, book)
HomeInventoryDatabase.furniture.push(typingDesk, bookshelf)
HomeInventoryDatabase.electronics.push(ghibliMovies, gameCube, computer, vintageFan)

// console.log(HomeInventoryDatabase.electronics, HomeInventoryDatabase.crafts, HomeInventoryDatabase.furniture)

const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

saveDatabase(HomeInventoryDatabase, "HomeInventoryDatabase")
