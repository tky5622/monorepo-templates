"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readProjectGraph = exports.ensureGlobalProjectGraph = void 0;
const devkit_1 = require("@nrwl/devkit");
const runtime_lint_utils_1 = require("@nrwl/workspace/src/utils/runtime-lint-utils");
const chalk = require("chalk");
function ensureGlobalProjectGraph(ruleName) {
    /**
     * Only reuse graph when running from terminal
     * Enforce every IDE change to get a fresh nxdeps.json
     */
    if (!global.projectGraph || !(0, runtime_lint_utils_1.isTerminalRun)()) {
        const nxJson = (0, devkit_1.readNxJson)();
        global.workspaceLayout = nxJson.workspaceLayout;
        /**
         * Because there are a number of ways in which the rule can be invoked (executor vs ESLint CLI vs IDE Plugin),
         * the ProjectGraph may or may not exist by the time the lint rule is invoked for the first time.
         */
        try {
            global.projectGraph = (0, runtime_lint_utils_1.mapProjectGraphFiles)((0, devkit_1.readCachedProjectGraph)());
        }
        catch (_a) {
            const WARNING_PREFIX = `${chalk.reset.keyword('orange')('warning')}`;
            const RULE_NAME_SUFFIX = `${chalk.reset.dim(`@nrwl/nx/${ruleName}`)}`;
            process.stdout
                .write(`${WARNING_PREFIX} No cached ProjectGraph is available. The rule will be skipped.
          If you encounter this error as part of running standard \`nx\` commands then please open an issue on https://github.com/nrwl/nx
          ${RULE_NAME_SUFFIX}\n`);
        }
    }
}
exports.ensureGlobalProjectGraph = ensureGlobalProjectGraph;
function readProjectGraph(ruleName) {
    ensureGlobalProjectGraph(ruleName);
    return global.projectGraph;
}
exports.readProjectGraph = readProjectGraph;
//# sourceMappingURL=project-graph-utils.js.map