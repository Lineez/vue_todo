<template>
    <nav>
        <ul>
            <template v-for="link in links" :key="link.name">
                <li>
                    <router-link :to="link.path">{{ link.name }}</router-link>
                </li>
            </template>
            <li>
                <button @click="toggleTheme">toggle theme</button>
            </li>
        </ul>
    </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    components: {},
    data() {
        return {
            links: [
                { path: '/', name: 'Home' },
                { path: '/about', name: 'About' },
            ],
        };
    },
    computed: {
        ...mapGetters({
            currentTheme: 'theme/getCurrentTheme',
        }),
    },
    methods: {
        ...mapActions({
            toggleTheme: 'theme/toggleTheme',
        }),
    },
    // mounted() {
    //     this.toggleTheme('dark');
    // },
};
</script>

<style lang="scss" scoped>
nav {
    ul {
        display: flex;
        column-gap: 10px;
    }
    li {
        a {
            @include button(
                10px 20px,
                var(--color-green),
                var(--color-white),
                false
            );
        }
        button {
            @include button(
                10px 20px,
                var(--color-green),
                var(--color-white),
                true
            );
        }
    }
}
</style>
