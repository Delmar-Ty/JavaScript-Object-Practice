var books = {
    book1: ["Old Yeller", "Fred Gipson", true],
    dI: function() {
        for (i = 0; i < this.book1.length; i++) {
            console.log(this.book1[i]);
        }
    }
};

books.dI();