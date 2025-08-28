import { formSchema } from "@/utils/validation-schemas";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validation = formSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.issues, {status: 400});
  }

  console.log('Message was sent');

  return NextResponse.json({}, { status: 200 });
}