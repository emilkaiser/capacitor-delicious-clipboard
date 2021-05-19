import Foundation
import Capacitor

@objc(DeliciousClipboard)
public class DeliciousClipboard: CAPPlugin {
    private let implementation = Clipboard()

    @objc func inspect(_ call: CAPPluginCall) {
        implementation.inspectPasteboard{ result in
            call.resolve([
                "value": result
            ])
        }
    }
}
