import { WebPlugin } from '@capacitor/core';
import { DeliciousClipboardPlugin } from './definitions';
declare global {
    interface Clipboard {
        read(): Promise<any>;
    }
}
export declare class DeliciousClipboardWeb extends WebPlugin implements DeliciousClipboardPlugin {
    constructor();
    inspect(): Promise<{
        value: string;
    }>;
}
declare const DeliciousClipboard: DeliciousClipboardWeb;
export { DeliciousClipboard };
