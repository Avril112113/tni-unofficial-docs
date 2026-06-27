export {};

declare global {
    interface Window {
        SiteConfig?: {
            baseUrl: string;
            dataUrl: string;
        };
    }
}
