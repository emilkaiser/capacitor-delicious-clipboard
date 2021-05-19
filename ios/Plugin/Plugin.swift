import Foundation
import Capacitor

@objc(DeliciousClipboard)
public class DeliciousClipboard: CAPPlugin {
    private let implementation = Clipboard()

    @objc func inspect(_ call: CAPPluginCall) {
        let result = implementation.inspectPasteboard()
        call.success([
            "value": result
        ])
    }
}