module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/scss/vue_todo/_mixin.scss";`,
            },
        },
    },
};
