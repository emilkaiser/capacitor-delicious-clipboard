import Foundation
import Capacitor

public class Clipboard {

  func inspectPasteboard() -> String {
    
    var type = "unknown"
    
    if #available(iOS 14.0, *) {
        UIPasteboard.general.detectPatterns(for: [UIPasteboard.DetectionPattern.probableWebURL, UIPasteboard.DetectionPattern.number, UIPasteboard.DetectionPattern.probableWebSearch], completionHandler: {result in
            
            switch result {
            
            case .success(let detectedPatterns):
                // A pattern detection is completed,
                // regardless of whether the pasteboard has patterns we care about.
                // So we have to check if the detected patterns contains our patterns.
                
                if detectedPatterns.contains(UIPasteboard.DetectionPattern.probableWebURL) {
                    // Will match if the pasteboard string has a URL within it
                    type = "probableWebURL"
                }
                else if detectedPatterns.contains(UIPasteboard.DetectionPattern.number) {
                    // Can include currency symbols, decimal places and formulas
                    // Also true if a string starts with a number, but not if number is in the string
                    type = "number"
                }
                else if detectedPatterns.contains(UIPasteboard.DetectionPattern.probableWebSearch) {
                    // Very broad, seems to be if the pasteboard contains strings.
                    // Check any other patterns before this
                    type = "probableWebSearch"
                }
                else {
                    // We won't be retrieving the value, so we won't get a notification banner
                    type =  "unknown"
                }
            case .failure(let error):
                // This never gets called
                print("error: \(error)")
                type = "error"
            }
            
        })
    }
    
    return type
  }

}
