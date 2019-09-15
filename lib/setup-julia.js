const core = require('@actions/core');
const tc = require('@actions/tool-cache');
const path = require('path');

async function download(){
    let defaultDownload = "https://julialang-s3.julialang.org/bin/linux/x64/1.2/julia-1.2.0-linux-x86_64.tar.gz";

    const fileName = "julia-1.2.0-linux-x86_64.tar.gz";
    let extPath;

    let downloadPath = await tc.downloadTool(defaultDownload);
    extPath = await tc.extractTar(downloadPath);
    tc.cacheDir(extPath, 'julialang', '1.2.0');

    core.addPath(path.join(extPath, "bin"));
}

download();