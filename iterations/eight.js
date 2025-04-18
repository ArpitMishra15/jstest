const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {                     // acc- accumulator, curr- current value
//     console.log(`acc: ${acc} and currval: ${currval}`);                     // to know currval and acc
//     return acc + currval
    
// }, 0)                                                                       // Initial value = 0

// other write method
const myTotal = myNums.reduce( (acc, currval) => acc+currval, 0 )
console.log(myTotal);


//Example
const shoppingCart = [
    {
        Items: 'Samsung Galexy s24',
        Price: 55000
    },
    {
        Items: 'Headphones',
        Price: 8000
    },
    {
        Items: 'Asics Shoes',
        Price: 7000
    },
    {
        Items: 'Clothes',
        Price: 6000
    },

]

const cartTotal = shoppingCart.reduce( (acc, Item) => acc + Item.Price, 0)

console.log(cartTotal);