const ITEMS = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8']
const PRICES = [123, 100, 10, 22, 44, 55, 66, 88]
const IDS = [1, 2, 3, 4, 5, 6, 7, 8]

let store = {
    catalog: [],
    cart: [],

    createDTO: function () {
        for (let i = 0; i < ITEMS.length; i++) {
            this.catalog.push (this._createProduct (ITEMS[i], PRICES[i], IDS[i]))
        }
    },
    _createProduct: function (name, price, id) {
        return {
            name: name,
            id: id,
            price: price
        }
    }
}