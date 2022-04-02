<template>
    <header class="header">
        <div class="header__wrap">
            <router-link to="/" class="header__logo">
                <img src="@/assets/images/logo.png" alt="logo" />
            </router-link>
            <nav-component></nav-component>
        </div>
    </header>
</template>

<script>
import NavComponent from '@/components/NavComponent.vue';
export default {
    components: { NavComponent },
};
</script>

<style lang="scss">
.header {
    padding: 10px 0;
    box-shadow: 0px 1px 2px var(--color-gray);
    // .header__wrap
    &__wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
        @include x-container();
        margin: 0 auto;
    }
    // .header__logo
    &__logo {
        display: flex;
        height: 100%;
    }
}
</style>
