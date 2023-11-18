const fs = require('fs');
const path = require('path');

const sourceDirectory = 'out/assets';  // Adjust the source directory
const destinationDirectory = 'media/webview';  // Adjust the destination directory

// Function to perform the initial read and write
const initialReadAndWrite = () => {
  // Read files in the source directory
  const files = fs.readdirSync(sourceDirectory);

  // Process each file
  files.forEach((filename) => {
    if (filename.match(/index-.+\.js|index-.+\.css/)) {
      // Rename the file to 'main.js' or 'style.css' based on the file extension
      const newFilename = filename.includes('.js') ? 'main.js' : 'style.css';
      const sourcePath = path.join(sourceDirectory, filename);
      const destinationPath = path.join(destinationDirectory, newFilename);

      // Copy the file to the destination directory with the new name
      fs.copyFileSync(sourcePath, destinationPath);
      console.log(`Copied ${filename} to ${newFilename}`);
    }
  });

  console.log('Initial read and write complete.');
};

// Function to handle file changes
const handleFileChange = (eventType, filename) => {
  if (filename) {
    console.log(`File ${filename} ${eventType}`);

    // Customize this logic based on your needs
    if ((eventType === 'change' || eventType === 'add') && filename.match(/index-.+\.js|index-.+\.css/)) {
      // Rename the file to 'main.js' or 'style.css' based on the file extension
      const newFilename = filename.includes('.js') ? 'main.js' : 'style.css';
      const sourcePath = path.join(sourceDirectory, filename);
      const destinationPath = path.join(destinationDirectory, newFilename);

      // Copy the file to the destination directory with the new name
      fs.copyFileSync(sourcePath, destinationPath);
      console.log(`Renamed and copied ${filename} to ${newFilename}`);
    }
  }
};

// Function to start monitoring file changes
const startFileMonitoring = () => {
  console.log(`Monitoring changes in ${sourceDirectory}...`);
  fs.watch(sourceDirectory, { recursive: true }, handleFileChange);
};
setTimeout(() => {
  // Run initial read and write
  initialReadAndWrite();
  
  // Start monitoring file changes after the initial read and write
  startFileMonitoring();
}, 2000);
