// Kontaktní formulář byl z webu odstraněn, endpoint je proto vypnutý.
// Bez exportovaného handleru Next.js na všechny metody odpoví 405 Method Not Allowed,
// tělo požadavku nečte a nic dalšího nevrací.
// Pro opětovné zapnutí stačí odkomentovat kód níže (a vrátit UI formuláře).

// import sendEmail from "@/utils/email-service";
// import { formSchema } from "@/utils/validation-schemas";
// import { NextRequest, NextResponse } from "next/server";
//
// export async function POST(req: NextRequest) {
//   const body = await req.json();
//
//   if (body.honeyPod) {
//     return NextResponse.json([{message: 'detekován spam'}], { status: 403})
//   }
//
//   const validation = formSchema.safeParse(body);
//
//   if (!validation.success) {
//     return NextResponse.json(validation.error.issues, {status: 400});
//   }
//
//   await sendEmail(body);
//   console.log('Message was sent');
//
//   return NextResponse.json({}, { status: 200 });
// }

// Soubor musí zůstat ES modulem kvůli `isolatedModules` v tsconfig.json.
export {};
