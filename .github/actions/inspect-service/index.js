const core = require('@actions/core');
const exec = require('@actions/exec');

const inspect = async function() {
    try {
        await exec.exec('echo', [Object.keys(process.env).join(', ')]);
    } catch (error) {
        core.setFailed(error.message);
    }
}

inspect();
