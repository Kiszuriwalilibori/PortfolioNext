"use client";

import dynamic from "next/dynamic";

const LoggedUserWithAuth = dynamic(() => import("./LoggedUserWithAuth"), {
    ssr: false,
});

export default function LoggedUserClient() {
    return <LoggedUserWithAuth />;
}
