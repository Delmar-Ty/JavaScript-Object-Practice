var recipes = {
    name: "Ginger Snaps",
    makes: "2 Dozen",
    ingredients: ["Flour", "Molasses", "Brown Sugar", "Eggs", "Baking Soda", "Salt", "Sugar", "Ginger Powder", "Cloves"],
    disReci: function() {
        console.log("Name: " + this.name);
        console.log("Makes: " + this.makes);
        console.log("Ingeridents: " + this.ingredients);
    }
};

recipes.disReci();