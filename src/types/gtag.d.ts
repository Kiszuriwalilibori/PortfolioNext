declare global {
    interface Window {
        gtag: (
            command: "config" | "event" | "js" | "consent",
            targetId: string | Date,
            config?: {
                page_path?: string;
                event_category?: string;
                event_label?: string;
                value?: number;
                custom_map?: Record<string, string>;
                send_page_view?: boolean;
                anonymize_ip?: boolean;
                cookie_domain?: string;
                cookie_expires?: number;
                cookie_flags?: string;
                cookie_prefix?: string;
                cookie_update?: boolean;
                [key: string]: string | number | boolean | Record<string, string> | undefined;
            }
        ) => void;
        dataLayer: Array<Record<string, unknown>>;
    }
}

export {};
