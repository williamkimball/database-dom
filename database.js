
const loadDatabase = (HomeInventoryDatabase) => {
    // Get the string version of the database
    const databaseString = localStorage.getItem(HomeInventoryDatabase)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}



//function that takes the dataset one wants to look at (or defaults to everything) and creates sections for them and prints to the DOM
let makeData = (dataSet) => {
    document.querySelector('#myStuff').innerHTML = ""; //clears the current contents of the DOM

    //put the database into a variable
    let run = loadDatabase("HomeInventoryDatabase");


    const fragment = document.createDocumentFragment(); //create a document fragment so there is only one write event to the DOM

    //function for making a paragraph element
    const mkPara = () => {
        return document.createElement('p');
    }
    //function for making a section element
    const mkSec = () => {
        return document.createElement("section")
    }

    //function that a section with paragraphs where the content is equal to the current iteration in the database
    const runSectionMaker = (array) => {

        array.forEach(element => {
            let para1 = mkPara();
            let para2 = mkPara();
            let para3 = mkPara();
            let sec = mkSec();

            para1.textContent = `Name: ${element.name}`
            para2.textContent = `Location ${element.location}`;
            para3.textContent = `Description: ${element.description}`;
            sec.appendChild(para1);
            sec.appendChild(para2);
            sec.appendChild(para3);
            fragment.appendChild(sec)
        })
    }

    //default function that creates a section for each object in the database
    const defaultSectionMaker = () => {
        for (let obj in run) {
            let array = run[obj];

            for (i = 0; i < array.length; i++) {
                let sec = mkSec();
                let para1 = mkPara();
                let para2 = mkPara();
                let para3 = mkPara();

                para1.textContent = `Name: ${array[i].name}`
                para2.textContent = `Location ${array[i].location}`;
                para3.textContent = `Description: ${array[i].description}`;

                sec.appendChild(para1);
                sec.appendChild(para2);
                sec.appendChild(para3);

                fragment.appendChild(sec)
            }

        }
    }

    //goes through and checks the user input, and runs the appropriate function, or it defaults to printing everything
    if (dataSet === "crafts") {
        runSectionMaker(run.crafts);
    }
    else if (dataSet === "furniture") {
        runSectionMaker(run.furniture);
    }
    else if (dataSet === "electronics") {
        runSectionMaker(run.electronics);
    } else {
        defaultSectionMaker();
    } document.querySelector('#myStuff').appendChild(fragment)
}

//default on page load is to print everything
makeData();