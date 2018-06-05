document.querySelector("#addItem").addEventListener("click", function () {
    let nameItem = document.querySelector("#itemName").value;
    let locationItem = document.querySelector("#itemLocation").value;
    let descriptionItem = document.querySelector("#itemDescription").value;
    let typeItem = document.querySelector('input[name="type"]:checked').value;

    let item = {
        name: nameItem,
        location: locationItem,
        description: descriptionItem,
    }
    if (typeItem === "furniture") {
        HomeInventoryDatabase.furniture.push(item)
    } else if (typeItem === "crafts") {
        HomeInventoryDatabase.crafts.push(item)
    } else {
        HomeInventoryDatabase.electronics.push(item)
    }
    saveDatabase(HomeInventoryDatabase, "HomeInventoryDatabase")
    makeData();
});

document.querySelector("#showThis").addEventListener("click", function () {
    let showThis = document.querySelector('input[name="showMe"]:checked').value;

    if (showThis === "furniture") {
        makeData("furniture");
    } else if (showThis === "crafts") {
        makeData("crafts");
    } else if (showThis === "electronics") {
        makeData("electronics");
    } else {
        makeData();
    }
});