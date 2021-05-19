'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

class DeliciousClipboardWeb extends core.WebPlugin {
    async inspect() {
        if (typeof navigator === 'undefined' || !navigator.clipboard) {
            throw Error('Clipboard API not available in this browser');
        }
        if (typeof ClipboardItem !== 'undefined') {
            try {
                const clipboardItems = await navigator.clipboard.read();
                const type = clipboardItems[0].types[0];
                return { value: type };
            }
            catch (err) {
                return { value: 'text/plain' };
            }
        }
        else {
            return { value: 'text/plain' };
        }
    }
}

const DeliciousClipboard = core.registerPlugin('DeliciousClipboard', {
    web: () => new DeliciousClipboardWeb(),
});

exports.DeliciousClipboard = DeliciousClipboard;
//# sourceMappingURL=plugin.cjs.js.map
