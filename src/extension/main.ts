import * as vscode from 'vscode';
import { TerminalProvider } from './panelProvider';
export function activate(context: vscode.ExtensionContext) {
	const subscriptions = context.subscriptions;
	const extensionUri = context.extensionUri;
	console.log('Congratulations, your extension "c-code-simulator" is now active!');
	subscriptions.push(vscode.commands.registerCommand('simulator.helloWorld', () => {vscode.window.showInformationMessage('Hello World from c code simulator!');}));
	const panelProvider = new TerminalProvider(extensionUri);
	subscriptions.push(vscode.window.registerWebviewViewProvider('simulator.terminal', panelProvider));
	// panelProvider._test = true;
	subscriptions.push(vscode.commands.registerCommand('simulator.runCode', () => {
		const activeEditor = vscode.window.activeTextEditor;
		if (activeEditor && activeEditor.document.languageId === 'c') {
			const code = activeEditor.document.getText();
			panelProvider.run(code);
		}
	}));
}
export function deactivate() {}
