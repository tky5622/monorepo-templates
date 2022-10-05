module.exports = (phase, config, context) => {
    return Object.assign(Object.assign({}, config), { myPhase: phase, myCustomValue: context.options.customValue });
};
//# sourceMappingURL=config.fixture.js.map