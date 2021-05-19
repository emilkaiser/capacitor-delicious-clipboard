package club.icecream.plugins.clipboard;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin
public class DeliciousClipboard extends Plugin {

    @PluginMethod
    public void inspect(PluginCall call) {
        call.success("unknown");
    }
}
