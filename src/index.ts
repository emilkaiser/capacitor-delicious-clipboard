import { registerPlugin } from '@capacitor/core';

import type { DeliciousClipboardPlugin } from './definitions';
import { DeliciousClipboardWeb } from './web';

const DeliciousClipboard = registerPlugin<DeliciousClipboardPlugin>('DeliciousClipboard', {
	web: () => new DeliciousClipboardWeb(),
});

export * from './definitions';
export { DeliciousClipboard };
