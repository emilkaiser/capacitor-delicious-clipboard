import { registerPlugin } from '@capacitor/core';
import { DeliciousClipboardWeb } from './web';
const DeliciousClipboard = registerPlugin('DeliciousClipboard', {
    web: () => new DeliciousClipboardWeb(),
});
export * from './definitions';
export { DeliciousClipboard };
//# sourceMappingURL=index.js.map