const core = require('@actions/core');
const { pull } = require('localang-js-lib');

function run() {
    try {
        const apiKey = core.getInput('api-key');
        const projectId = Number(core.getInput('project-id'));

        pull(apiKey, projectId);
    } catch (error) {
        core.setFailed(`Action failed with error ${error.message}`);
    }
}

run();
