<template>
    <form @submit.prevent>
        <label for="todo-title">Add title</label>
        <input v-focus v-model="todo.title" type="text" id="todo-title" />
        <button @click="addTodo">add</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            todo: {
                title: '',
            },
        };
    },
    methods: {
        addTodo() {
            this.todo.id = Date.now();
            this.$emit('create', this.todo);
            this.todo = {
                title: '',
            };
        },
    },
};
</script>

<style lang="scss" scoped>
form {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 10px 15px;
    label {
        margin-bottom: 10px;
        font-size: 1.1rem;
        text-align: center;
        color: var(--color-green);
    }
    input {
        @include button(
            10px 20px,
            var(--color-black),
            var(--color-white),
            false,
            false
        );
    }
    button {
        @include button(10px 20px, var(--color-green));
        align-self: center;
    }
}
</style>
