"use strict";
try {
    try {
        const { output } = require('nx/src/utils/output');
        let workspaceRoot;
        try {
            workspaceRoot = require('nx/src/utils/app-root').workspaceRoot;
        }
        catch (_a) {
            workspaceRoot = require('nx/src/utils/workspace-root').workspaceRoot;
        }
        const { getDependencyConfigs, getOutputs, } = require('nx/src/tasks-runner/utils');
        const { Cache } = require('nx/src/tasks-runner/cache');
        const tasksRunner = require('nx/tasks-runners/default').default;
        const { CompositeLifeCycle } = require('nx/src/tasks-runner/life-cycle');
        exports.runnerReturnsPromise = true;
        exports.output = output;
        exports.workspaceRoot = workspaceRoot;
        exports.tasksRunner = tasksRunner;
        exports.CompositeLifeCycle = CompositeLifeCycle;
        exports.getDependencyConfigs = getDependencyConfigs;
        exports.getOutputs = getOutputs;
        exports.Cache = Cache;
    }
    catch (_b) {
        const { output } = require('@nrwl/workspace/src/utilities/output');
        const { appRootPath } = require('@nrwl/tao/src/utils/app-root');
        const { getDependencyConfigs, getOutputs, } = require('@nrwl/workspace/src/tasks-runner/utils');
        const { tasksRunnerV2, } = require('@nrwl/workspace/src/tasks-runner/tasks-runner-v2');
        let CompositeLifeCycle;
        try {
            CompositeLifeCycle =
                require('@nrwl/workspace/src/tasks-runner/life-cycle').CompositeLifeCycle;
        }
        catch (e) { }
        const { Cache } = require('@nrwl/workspace/src/tasks-runner/cache');
        exports.runnerReturnsPromise = false;
        exports.output = output;
        exports.workspaceRoot = appRootPath;
        exports.tasksRunner = tasksRunnerV2;
        exports.CompositeLifeCycle = CompositeLifeCycle;
        exports.getDependencyConfigs = getDependencyConfigs;
        exports.getOutputs = getOutputs;
        exports.Cache = Cache;
    }
}
catch (e) {
    console.error('NX CLOUD ERROR');
    console.error('---------------------------------------');
    console.error('This version of Nx Cloud is incompatible with the @nrwl/* packages in your workspace.');
    console.error('');
    console.error('Match your @nrwl/nx-cloud version to the same major version of your @nrwl/* packages and try again.');
    console.error('---------------------------------------');
    process.exit(1);
}
//# sourceMappingURL=nx-imports.js.map