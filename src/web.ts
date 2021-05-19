import { WebPlugin } from '@capacitor/core';
import { DeliciousClipboardPlugin } from './definitions';

declare let ClipboardItem: any;
declare global {
  interface Clipboard {
    read(): Promise<any>;
  }
}

export class DeliciousClipboardWeb extends WebPlugin implements DeliciousClipboardPlugin {
  constructor() {
    super({
      name: 'DeliciousClipboard',
      platforms: ['web'],
    });
  }

  async inspect(): Promise<{ value: string }> {
    if (typeof navigator === 'undefined' || !navigator.clipboard) {
      throw Error('Clipboard API not available in this browser');
    }

    if (typeof ClipboardItem !== 'undefined') {
      try {
        const clipboardItems = await navigator.clipboard.read();
        const type = clipboardItems[0].types[0];
        return { value: type };
      } catch (err) {
        return { value: 'text/plain' };
      }
    } else {
      return { value: 'text/plain' };
    }
  }
}

const DeliciousClipboard = new DeliciousClipboardWeb();

export { DeliciousClipboard };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(DeliciousClipboard);
