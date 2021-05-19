declare module '@capacitor/core' {
    interface PluginRegistry {
        DeliciousClipboard: DeliciousClipboardPlugin;
    }
}
export interface DeliciousClipboardPlugin {
    inspect(): Promise<string>;
}
