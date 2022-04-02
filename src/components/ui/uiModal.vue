<template>
    <div v-if="show" @click="hideModal" class="modal">
        <div @click.stop class="modal__wrap">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import modalToggle from '@/mixins/modalToggle';
export default {
    components: {},
    mixins: [modalToggle],
};
</script>

<style lang="scss">
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.418);
    // .modal__wrap
    &__wrap {
        position: relative;
        width: 100%;
        max-width: 600px;
        border-radius: 10px;
        background-color: var(--color-white);
        z-index: 2;
    }
}
</style>
