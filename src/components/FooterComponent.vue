<template>
    <footer class="footer">
        <div class="footer__wrap">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id nulla
            nesciunt adipisci ea, sunt odit? Aliquam harum dolor aliquid
            voluptate esse natus, explicabo aspernatur illo placeat excepturi
            iste? Aliquam, iusto.
        </div>
    </footer>
</template>

<script>
export default {
    components: {},
};
</script>

<style lang="scss">
.footer {
    padding: 10px 0;
    box-shadow: 0px -1px 2px var(--color-gray);
    // .footer__wrap
    &__wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        @include x-container();
        margin: 0 auto;
    }
}
</style>
