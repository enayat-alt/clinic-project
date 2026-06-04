// Integrate Razorpay or Stripe here
// npm install razorpay  OR  npm install stripe

exports.createOrder = async (amount) => {
  // const Razorpay = require("razorpay");
  // const instance = new Razorpay({ key_id: process.env.RAZORPAY_KEY, key_secret: process.env.RAZORPAY_SECRET });
  // return instance.orders.create({ amount: amount * 100, currency: "INR", receipt: `receipt_${Date.now()}` });
  return { id: "order_placeholder", amount };
};

exports.verifyPayment = (orderId, paymentId, signature) => {
  // Verify signature here
  return true;
};
