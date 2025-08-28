import sendEmail from "@/utils/email-service";
import { formSchema } from "@/utils/validation-schemas";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  
  if (body.honeyPod) {
    return NextResponse.json([{message: 'detekován spam'}], { status: 403})
  }

  const validation = formSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.issues, {status: 400});
  }

  await sendEmail(body);
  console.log('Message was sent');

  return NextResponse.json({}, { status: 200 });
}