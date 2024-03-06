import {loadFile, saveFile, saveFileAs, loadDirectory} from './file_functions';

let settingsFileHandle;
let pathsDirHandle;
let pathsFileHandle = [];
let autosDirHandle;
let autosFileHandle = [];

async function findAutoMakerDirectory(startingDirectory) {
    const dirHandle = startingDirectory;

    var found = false;
    for await (const value of dirHandle.values()) {
        if (dirHandle.kind != "directory") {
            found = true;
        }
    }
}