export interface DeliciousClipboardPlugin {
    inspect(): Promise<{
        value: string;
    }>;
}
