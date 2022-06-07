const core = require('@actions/core');
const exec = require('@actions/exec');

const inspect = async function() {
    try {
        await exec.exec('echo', [`${process.env.GITHUB_ACTION} ${process.env.GITHUB_ACTION_REF}`]);
    } catch (error) {
        core.setFailed(error.message);
    }
}

inspect();
