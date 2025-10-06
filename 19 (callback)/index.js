// callback = a function that is passed as an argument to another function
// Used to handle asynchronous operation:
// 1. Reading a file
// 2. Network requests
// 3. interacting with databases

sum(displayConsole, 1, 2);

function sum(callback, x, y) {
    let res = x + y;
    callback(res);
}
function displayConsole(result) {
    console.log(result);
}

//2
function display(some) {
    console.log(some);
}
function calculator(x, y, callback) {
    let sum = x + y;

    callback(sum);

    return sum;
}
const res = calculator(5, 5, display);
// console.log(res);

// 3
// ✅ WITH CALLBACKS (flexible)
// Callback function
function sendEmailNotification(total) {
    console.log(`Sending email: Your order total is $${total}`);
}

function processOrder(items, paymentCallback) {
    let total = items.reduce((sum, item) => sum + item.price, 0);
    console.log(`Processing order...`);
    
    // After processing, call the callback
    paymentCallback(total);
    
    return `Order processed successfully!`;
}

// Usage
const items = [{name: "Book", price: 20}, {name: "Pen", price: 5}];
const result = processOrder(items, sendEmailNotification);
console.log(result);




// 4
//real world examples
// though this program won't run just understand the concept how callback function, so it kind of work as a placeholder
// whatever function is passed to that function it will execute that. That means we can reuse it accroding to our need
// in below examples 3 different caller using this function accroding to their needs.

// Imagine this pizza delivery app
function deliverPizza(address, whenDeliveredCallback) {
    console.log(`🚗 Driving to ${address}...`);
    
    // Simulate delivery time
    setTimeout(() => {
        console.log(`✅ Delivered to ${address}`);
        const deliveryTime = Math.random() * 30 + 15; // 15-45 minutes
        
        // Here's the magic - we don't know WHAT should happen after delivery
        // The CALLER decides!
        whenDeliveredCallback(deliveryTime);
    }, 2000);
}

// DIFFERENT PIZZA PLACES, DIFFERENT NEEDS:

// Pizza Hut - sends email receipt
deliverPizza("123 Main St", (time) => {
    // sendEmail(`Your pizza delivered in ${time} minutes!`);
    // addLoyaltyPoints(10);
    console.log(`Pizza Hut delivered the pizza within ${time} minutes`);//own
});

// Dominos - updates app and sends push notification  
deliverPizza("456 Oak St", (time) => {
    // updateAppStatus(`Delivered in ${time} min`);
    // sendPushNotification("Pizza delivered! 🍕");
    // playDeliverySound();
    console.log(`Dominos delivered the pizza within ${time} minutes`);
});

// Local shop - just prints receipt
deliverPizza("789 Pine St", (time) => {
    // printReceipt(`Time: ${time} minutes`);
    console.log(`local shoop delivered the pizza within ${time} minutes`);
});