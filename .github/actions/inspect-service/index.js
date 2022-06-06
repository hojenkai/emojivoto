const exec = require('@actions/exec');

const inspect = async function() {
    try {
        await exec.exec('echo', ['${{github.action}} ${{github.action_ref}}']);
    } catch (error) {
        core.setFailed(error.message);
    }
}

inspect();
