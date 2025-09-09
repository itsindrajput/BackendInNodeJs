const cart = ["shoes", "socks", "pant", "tshirt", "belt"];

const promise = createOrder(cart);

promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
    return paymentInfo;
  })
  .then(function (paymentInfo) {
    return placeOrder(paymentInfo);
  })
  .then(function (successMsg) {
    console.log(successMsg);
  })
  .catch(function (error) {
    console.log(error);
  });

function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("Cart Is Not Valid!");
      reject(err);
      return;
    }

    const orderId = "123456";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function validateCart(cart) {
  return true;
}

function placeOrder(paymentInfo) {
  const promise = new Promise((resolve, reject) => {
    resolve("Payment Successful. Order Placed!");
  });
  return promise;
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    resolve("Payment Info!");
  });
}
