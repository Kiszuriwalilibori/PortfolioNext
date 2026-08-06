import { NextRequest } from "next/server";

import addComment from "./addComment";
import { updateComment } from "./updateComment";
import { deleteComment } from "./deleteComment";
import { getComment } from "./getComment";

export async function GET(request: NextRequest) {
    return getComment(request);
}
export async function POST(request: NextRequest) {
    return addComment(request);
}
export async function PATCH(request: NextRequest) {
    return updateComment(request);
}
export async function DELETE(request: NextRequest) {
    return deleteComment(request);
}

// todo https://chatgpt.com/c/6a70a1de-bf48-83ed-a702-2e1763843a06 tu są sugestie żeby puścić get przez Admin SDK skoro cał reszta już tak działa

// todo ukrywanie klucza Opcja 3 – endpoint /api/firebase-config

// Technicznie możliwe.

// Klient:

// const config = await fetch("/api/firebase-config").then(r => r.json());
// initializeApp(config);

// Serwer:

// return Response.json({
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     ...
// });

// To "udobrucha" część audytorów, ale nie zwiększy bezpieczeństwa.

// Opcja 4 – App Check (to już ma sens)

// Jeżeli chcesz jeszcze podnieść bezpieczeństwo Firebase, rozważyłbym w przyszłości Firebase App Check.

// On pozwala ograniczyć korzystanie z usług Firebase do rzeczywiście uruchomionej aplikacji (np. przez reCAPTCHA Enterprise lub inne mechanizmy atestacji). Nie zastępuje autoryzacji, ale utrudnia nadużycia.

// todo get nigdy nie jest używane a więc i przetestowane nie było
