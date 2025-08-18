import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    [
      {
        "id": 1,
        "subtitle": "confira nossa linha",
        "title": "corporal",
        "description": "com benefícios além da hidratação",
        "backgroundImage": "/assets/img1.png"
      },
      {
        "id": 2,
        "subtitle": "toda linha",
        "title": "anti-age",
        "discount": "com 15% OFF",
        "coupon": "ANTIAGE15",
        "backgroundImage": "/assets/img2.png"
      },
      {
        "id": 3,
        "subtitle": "",
        "title": "kits incríveis",
        "discount": "até 50% OFF",
        "coupon": "QUEROTODOS",
        "backgroundImage": "/assets/img3.png"
      }
    ],
    {
      status: 200,
    }
  )
}