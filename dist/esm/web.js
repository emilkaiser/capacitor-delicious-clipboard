var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WebPlugin } from '@capacitor/core';
export class DeliciousClipboardWeb extends WebPlugin {
    constructor() {
        super({
            name: 'DeliciousClipboard',
            platforms: ['web'],
        });
    }
    inspect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof navigator === 'undefined' || !navigator.clipboard) {
                throw Error('Clipboard API not available in this browser');
            }
            if (typeof ClipboardItem !== 'undefined') {
                try {
                    const clipboardItems = yield navigator.clipboard.read();
                    const type = clipboardItems[0].types[0];
                    return type;
                }
                catch (err) {
                    return 'text/plain';
                }
            }
            else {
                return 'text/plain';
            }
        });
    }
}
const DeliciousClipboard = new DeliciousClipboardWeb();
export { DeliciousClipboard };
import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(DeliciousClipboard);
//# sourceMappingURL=web.js.map