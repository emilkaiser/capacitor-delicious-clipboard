var capacitorPlugin = (function (exports, core) {
    'use strict';

    var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    class DeliciousClipboardWeb extends core.WebPlugin {
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
                        return { value: type };
                    }
                    catch (err) {
                        return { value: 'text/plain' };
                    }
                }
                else {
                    return { value: 'text/plain' };
                }
            });
        }
    }
    const DeliciousClipboard = new DeliciousClipboardWeb();
    core.registerWebPlugin(DeliciousClipboard);

    exports.DeliciousClipboard = DeliciousClipboard;
    exports.DeliciousClipboardWeb = DeliciousClipboardWeb;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
