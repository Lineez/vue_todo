<template>
    <li class="todo__item">
        <span>{{ task.id }})</span>
        <div>{{ task.title }}</div>
        <label :for="'todo-checkbox' + task.id">
            {{ this.task.completed ? 'Uncomplete' : 'Complete' }}
        </label>
        <input
            @click="completeTask"
            :checked="this.task.completed"
            :id="'todo-checkbox' + task.id"
            type="checkbox"
        />
    </li>
</template>

<script>
export default {
    props: {
        task: {
            type: Object,
            // required: true,
        },
    },
    methods: {
        completeTask(event) {
            this.$emit('complete', event.target.checked, this.task);
        },
    },
};
</script>

<style lang="scss" scoped>
.todo__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    padding: 10px 15px;
    border: 1px solid var(--color-green);
    font-size: 1.3rem;
    &:not(:last-child) {
        margin-bottom: 20px;
    }
    label {
        @include button();
    }
    input {
        display: none;
    }
}
</style>
