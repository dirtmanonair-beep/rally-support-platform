import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-04-10' });
export async function POST(req: NextRequest) {
  try {
    const { driverId, driverName, amount, type } = await req.json();
    if (!amount || amount < 500) return NextResponse.json({ error: '最低¥500です' }, { status: 400 });
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rally-support-platform.vercel.app';
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price_data: { currency: 'jpy', product_data: { name: `${driverName} への応援` }, unit_amount: amount, ...(type === 'monthly' ? { recurring: { interval: 'month' } } : {}) }, quantity: 1 }],
      mode: type === 'monthly' ? 'subscription' : 'payment',
      success_url: `${baseUrl}/support?driver=${encodeURIComponent(driverName)}&amount=${amount}`,
      cancel_url: `${baseUrl}/drivers`,
      metadata: { driver_id: driverId, driver_name: driverName, support_type: type },
    });
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    return NextResponse.json({ error: '決済作成失敗' }, { status: 500 });
  }
}
