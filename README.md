This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

to co jest opisane jak section aria-label navigation-container wyświetla się puste i w dziwnym miejscu - niby nie błąd ale nie powinno tak być

//jeżeli jestem wylogowany, to podczas proby usunięcia komentarza nie powinien wyskakiwać modal ostrzegający przed usunięciem

Podczas pojawiania się modalu do wprowadzania komentarza, główny ekran przesuwa się odorbinę w prawo

// TODO: coś dziwnego dzieje się kiedy:
// 1 najpierw jestem zalogowany
// 2 potem się wylogowuję
// 3będąc wylogowanym próbuję dodawać komentarze albo edytować istniejące
// 4 jak się po tym wszystkim zaloguję, to pokazują mi się po kolei wszystkie modale od operacji których nie mogłem dokoną

// todo przepisać te jobsrelated na kalsę abstra

w theme.ts:
// todo są akurat trzy wersje czerwonego rózniące sie nasyceniem i trzy wersje border, zrobi z tego constans

w useGetProjects.tsx:
// todo: podejrzanie skomplikowane. Po co filtrować w tym miejscu

czy pole created nie powinno być raczej instance of Date? Tak sugeruje funkcja sort comments
