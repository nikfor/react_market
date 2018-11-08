export class Check {
    constructor(products) {
        this.products = products || [];
    }

    add(product) {
        this.products.push(product);
    }

    remove_last() {
        this.products.pop();
    }

    summary_list() {
        const list = []

        this.products.forEach(function(product, i, arr) {
            if (!list.some((item) => (item.id == product.id))) {
                list.push(product);
            };
            if (typeof(list.find((item) => (item.id == product.id)).count) == 'undefined'){
                list.find((item) => (item.id == product.id)).count = 1;
            } else {
                list.find((item) => (item.id == product.id)).count += 1;
            }
        });
        return list;
    }
}