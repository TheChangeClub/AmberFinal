import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const data = await request.json();
    const { taste, smoothness, burn, aroma, smoke_body, packaging_design } = data;

    const scores = [taste, smoothness, burn, aroma, smoke_body, packaging_design];

    // The 0.5-star increment validation
    const isValid = scores.every(s => s >= 0 && s <= 5 && (s * 2) % 1 === 0);

    if (!isValid) {
        return NextResponse.json({ error: "Ratings must be 0-5 in 0.5 increments." }, { status: 400 });
    }

    const overallAvg = scores.reduce((a, b) => a + b) / scores.length;

    return NextResponse.json({
        message: "Review submitted to Amber",
        overall: overallAvg.toFixed(2)
    });
}