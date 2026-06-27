export {};

declare global {
    interface Window {
        SiteConfig?: {
            baseUrl: string;
            dataLatestUrl: string;
        };
    }
}
