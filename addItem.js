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
    makeData(typeItem);

});