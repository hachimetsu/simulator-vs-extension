import { defineConfig, PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), renameOutfiles()],
  build: {
    outDir: "media/webview",
    assetsDir: "",
    ssrManifest: false,
    rollupOptions: {
      input: "/src/webview/main.tsx"
    }
  },
  ssr: {
    noExternal: true
  }
});

function renameOutfiles(): PluginOption {
    return {
        name: "renameOutfiles",
        generateBundle: (options, bundle, isWrite)=>{
            for (const [fileName, chunk] of Object.entries(bundle)) {
                // Customize the new filename based on the file type
                let newFileName: string;

                if (fileName.endsWith('.js')) {
                    newFileName = 'main.js';
                } else if (fileName.endsWith('.css')) {
                    newFileName = 'style.css';
                } else {
                    // If it's not a JS or CSS file, keep the original filename
                    newFileName = fileName;
                }
                // Rename the file
                chunk.fileName = newFileName;
            }
        }
    };
}
