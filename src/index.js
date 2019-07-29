
var shop = {
    products: [{
        id: 729592,
        title:'Candy',
        price: 24
    },{
        id: 898491,
        title:'Lamp',
        price: 96
    },{
        id:975023,
        title: 'oil',
        price: 66
    },{
        id:644930,
        title: 'Bank-Card',
        price: 79
    }],
    transactions:[],
    workers: ['Lucy', 'Amy', 'Rebecca'],
    balance: 200,
    storage: 100,
    standardStorage: 100,
    left: 20,
    standardLay: 50,
    cart: [898491, 729592, 729592, 644930],
    addGoods: function(){
        total = this.standardLay-this.left+this.standardStorage-this.storage
        return total
    },
    addStandardStorage: function(amount){
        this.StandardStorage = this.StandardStorage+amount
    },
    addStandardLay: function(acc){
        this.StandardLay = this.StandardLay+acc
    },
    newproduct: function(product){
        this.products.push(product)
    },
    wholePrice: function(){
        var total = 0
        var transaction = {}
        for (i=0;i<this.cart.length;i++){
            var productId = this.cart[i]
            var product = this.products.find(function(o){
                return o.id === productId
                // o is the object in the products
            })
            if(product){
                total = total+product.price
            }else{
                console.log('this product does not exist')
            }
        }
        transaction.total = total
        this.transactions.push(transaction)
        console.log('Your total is:'+total)
        return total
    },
    hireWorker: function(worker){
        this.workers.push(worker)
    },
    addCart: function(thingId){
        this.cart.push(thingId)
    }

}

shop.addCart(729592)
shop.addCart(898491)
shop.hireWorker('hgoag')
console.log(shop)
shop.wholePrice()

