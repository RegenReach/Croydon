/**
 * Netlify Function: create-payment-intent
 *
 * Creates a Stripe Payment Intent for individual pickup orders.
 * Deploy this project to Netlify and this function runs automatically at:
 *   /.netlify/functions/create-payment-intent
 *
 * Setup steps:
 *   1. In Netlify dashboard → Site settings → Environment variables
 *      add: STRIPE_SECRET_KEY = sk_live_... (your Stripe secret key)
 *   2. In your terminal (locally for dev):
 *      npm install stripe   ← run this from the project root
 *   3. Create netlify.toml at the project root:
 *      [build]
 *        functions = "netlify/functions"
 */

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const { amountCents, cart } = body;

  if (!amountCents || amountCents < 50) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid amount' }) };
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount:   amountCents,
      currency: 'aud',
      payment_method_types: ['card'],
      metadata: {
        source:    'croydon-bake-house-website',
        order_type: 'individual-pickup',
        items:     cart ? cart.map(i => `${i.name} x${i.qty}`).join(', ') : '',
      },
    });

    return {
      statusCode: 200,
      headers:    { 'Content-Type': 'application/json' },
      body:       JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    };
  } catch (err) {
    console.error('Stripe error:', err);
    return {
      statusCode: 500,
      body:       JSON.stringify({ error: err.message }),
    };
  }
};
