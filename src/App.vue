<template>
    <header-component :class="currentTheme"></header-component>
    <main :class="currentTheme">
        <router-view></router-view>
    </main>
    <footer-component :class="currentTheme"></footer-component>
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import { mapState } from 'vuex';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
    components: { HeaderComponent, FooterComponent },
    data() {
        return {};
    },
    methods: {},
    computed: {
        ...mapState({
            currentTheme: (state) =>
                state.theme.themes[state.theme.currentTheme],
        }),
    },
};
</script>

<style lang="scss">
</style>
