// "use client";

// import { useEffect } from "react";

// interface GlobalErrorProps {
//     error: Error & { digest?: string };
//     reset: () => void;
// }

// export default function GlobalError({ error, reset }: GlobalErrorProps) {
//     useEffect(() => {
//         console.error("Global application error:", {
//             message: error.message,
//             digest: error.digest,
//             error,
//         });
//     }, [error]);

//     return (
//         <html lang="en">
//             <body
//                 style={{
//                     margin: 0,
//                     minHeight: "100vh",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     padding: "24px",
//                     boxSizing: "border-box",
//                     color: "#171717",
//                     fontFamily: "Arial, Helvetica, sans-serif",
//                     textAlign: "center",
//                 }}
//             >
//                 <main
//                     id="global-error main"
//                     role="alert"
//                     style={{
//                         width: "100%",
//                         maxWidth: "520px",
//                     }}
//                 >
//                     <p
//                         style={{
//                             margin: "0 0 24px",
//                             color: "#910D0D",
//                             fontSize: "clamp(64px, 12vw, 100px)",
//                             fontWeight: 700,
//                             lineHeight: 1,
//                         }}
//                     >
//                         500
//                     </p>

//                     <h1 style={{ fontSize: "24px" }}>Application unavailable</h1>

//                     <p
//                         style={{
//                             color: "#666666",
//                             lineHeight: 1.6,
//                         }}
//                     >
//                         A critical error occurred. Please try again or reload the application.
//                     </p>

//                     {error.digest && (
//                         <p
//                             style={{
//                                 color: "#666666",
//                                 fontSize: "12px",
//                             }}
//                         >
//                             Error reference: {error.digest}
//                         </p>
//                     )}

//                     <button
//                         type="button"
//                         onClick={reset}
//                         style={{
//                             marginTop: "16px",
//                             padding: "12px 24px",
//                             border: 0,
//                             borderRadius: "4px",
//                             backgroundColor: "#910D0D",
//                             color: "#ffffff",
//                             fontSize: "14px",
//                             fontWeight: 600,
//                             cursor: "pointer",
//                         }}
//                     >
//                         Try again
//                     </button>
//                 </main>
//             </body>
//         </html>
//     );
// }

"use client";

import { useEffect } from "react";

interface GlobalErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
    useEffect(() => {
        console.error("Global application error:", {
            message: error.message,
            digest: error.digest,
            error,
        });
    }, [error]);

    return (
        <html lang="pl">
            <body
                style={{
                    margin: 0,
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "24px",
                    boxSizing: "border-box",
                    color: "#171717",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    textAlign: "center",
                }}
            >
                <main
                    role="alert"
                    style={{
                        width: "100%",
                        maxWidth: "520px",
                        backgroundColor: "#ffffff",
                    }}
                >
                    <div style={{ backgroundColor: "#ffffff" }}>
                        <p
                            style={{
                                margin: "0 0 16px",
                                fontSize: "64px",
                                fontWeight: 700,
                                lineHeight: 1,
                            }}
                        >
                            500
                        </p>

                        <h1
                            style={{
                                margin: "0 0 16px",
                                fontSize: "24px",
                            }}
                        >
                            Wystąpił krytyczny błąd
                        </h1>

                        <p
                            style={{
                                margin: "0 0 24px",
                                color: "#666666",
                                lineHeight: 1.6,
                            }}
                        >
                            Aplikacja napotkała poważny problem i nie może wyświetlić tej strony. Spróbuj ponownie.
                        </p>

                        {error.digest && (
                            <p
                                style={{
                                    margin: "0 0 24px",
                                    color: "#666666",
                                    fontSize: "12px",
                                }}
                            >
                                Identyfikator błędu: {error.digest}
                            </p>
                        )}

                        <button
                            onClick={reset}
                            style={{
                                padding: "12px 24px",
                                border: 0,
                                borderRadius: "4px",
                                backgroundColor: "#d3101c",
                                color: "#ffffff",
                                fontSize: "14px",
                                fontWeight: 600,
                                cursor: "pointer",
                            }}
                        >
                            Spróbuj ponownie
                        </button>
                    </div>
                </main>
            </body>
        </html>
    );
}
