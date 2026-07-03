import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  console.log("Received Form Data:", data);

  return NextResponse.json({
    success: true,
    message: "Data received successfully",
  });
}