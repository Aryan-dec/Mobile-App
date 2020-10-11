package com.korbsstudio.falixnodes;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        WebView webview = findViewById(R.id.webviewid);

        webview.getSettings().setJavaScriptEnabled(true);
        webview.loadUrl("https://software.falixnodes.net/app/Android/");
    }
}