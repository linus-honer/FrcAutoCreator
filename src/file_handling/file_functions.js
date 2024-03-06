let fileHandle;
let directoryHandle;

async function loadFile() {
    // Open file picker and destructure the result the first handle

    const [fileHandle] = await window.showOpenFilePicker({
        types: [
            {
                description: 'Auto Maker Json File',
                accept: {
                    'image/*': ['.py']
                }
            },
        ],
        excludeAcceptAllOption: true,
        multiple: false
    });
    if (!fileHandle) {
        // User cancelled, or otherwise failed to open a file.
        return;
      }
    const file = await fileHandle.getFile();
    return file;
}

async function saveFile(new_file) {
    let stream = await fileHandle.createWritable();
    await stream.write(new_file);
    await stream.close();
}

async function saveFileAs(new_file) {
    // create a new handle
    fileHandle = await window.showSaveFilePicker();
    saveFile();
}

async function loadDirectory() {
    const directoryHandle = await window.showDirectoryPicker();
    if (!directoryHandle) {
        // User cancelled, or otherwise failed to open a file.
        return;
    }
    return directoryHandle;
}

export {loadFile, saveFile, saveFileAs, loadDirectory};