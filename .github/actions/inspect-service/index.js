// const core = require('@actions/core');
const exec = require('@actions/exec');

const inspect = async function() {
    core.get
    try {
        await exec.exec('echo', [Object.keys(proces.env).join(', ')]);
    } catch (error) {
        core.setFailed(error.message);
    }
}

inspect();