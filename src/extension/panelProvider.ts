import * as vscode from 'vscode';
import getNonce from './nonce';
interface RenderHTML {
    cspSource?: string;
    styleUri?: vscode.Uri;
    scriptUri?: vscode.Uri;
}
export default class PanelProvider implements vscode.WebviewViewProvider {
    protected _title?: string;
    protected _webviewView?: vscode.WebviewView;
    public _test: boolean;
    constructor(protected readonly _extensionUri: vscode.Uri){
        this._test = false;
        this._title = "Extension";
    }
    public resolveWebviewView(
        _webviewView: vscode.WebviewView,
        _context: vscode.WebviewViewResolveContext<unknown>,
        _token: vscode.CancellationToken
    ): void | Thenable<void> {
        this._webviewView = _webviewView;
        const webview = this._webviewView.webview;
        webview.options = {
            enableScripts: true,
            localResourceRoots: [vscode.Uri.joinPath(this._extensionUri, 'media')]
        };
        if(this._test) {webview.html = `<div>title: ${this._title ? this._title : 'Extension Webview'} working !</div>`;}
        else {webview.html = this.renderHTML({
                cspSource: webview.cspSource,
                scriptUri: webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', "webview", "assets", 'index-UbQphSoP.js')),
                styleUri: webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media',"webview", "assets", 'index-g71WkpGn.css'))
        });}
    }
    protected renderHTML(args: RenderHTML) {
        const nonce = getNonce();
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${args.cspSource}; script-src 'nonce-${nonce}';">
            <title>${this._title}</title>
            <link rel="stylesheet" href="${args.styleUri ? args.styleUri : '#'}">
        </head>
        <body>
            <noscript>you have to allow script to use ${this._title ? this._title : 'this'} !</noscript>
            <div id="root">React script not working !</div>
            <script src="${args.scriptUri ? args.scriptUri : '#'}" nonce="${nonce}"></script>
        </body>
        </html>`;
    }
}
export interface Simulator {
    type: "runCode" | "clean";
    code: string;
}
export class TerminalProvider extends PanelProvider {
    constructor(protected readonly _extensionUri: vscode.Uri) {
        super(_extensionUri);
    }

    public run(code: string) {
        if (this._webviewView) {this._webviewView.webview.postMessage({ type: 'runCode', code });}
    }

    public clear() {
        if (this._webviewView) {this._webviewView.webview.postMessage({ type: 'clear' });}
    }

}