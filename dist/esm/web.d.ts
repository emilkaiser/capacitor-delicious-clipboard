import { WebPlugin } from '@capacitor/core';
import type { DeliciousClipboardPlugin } from './definitions';
declare global {
    interface Clipboard {
        read(): Promise<any>;
    }
}
export declare class DeliciousClipboardWeb extends WebPlugin implements DeliciousClipboardPlugin {
    inspect(): Promise<{
        value: string;
    }>;
}
