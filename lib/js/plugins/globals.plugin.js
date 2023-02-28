import colors from '/lib/css/src/export/colors.module.scss';
export default {
    install(Vue) {
        Vue.mixin({
            data() {
                return {
                    colors,
                }
            }
        });
    }
}