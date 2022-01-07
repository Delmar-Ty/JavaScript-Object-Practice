var wishlist = {
    name: "Sled",
    price: 39.99,
    color: "Red",
    stores: ["Target", "Walmart", "Bass Pro", "Cabelas", "K-Mart"],
    displayInfo: function () {
        console.log("Item: " + this.name);
        console.log("Price: " + this.price);
        console.log("Color: " + this.color);
        console.log("Stores: " + this.stores);
    }
};

wishlist.displayInfo();