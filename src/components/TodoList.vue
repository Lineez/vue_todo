<template>
    <ul v-if="tasks.length > 0" class="todo__list">
        <transition-group name="task-list">
            <todo-item
                v-for="task in tasks"
                :key="task.id"
                :task="task"
            ></todo-item>
        </transition-group>
    </ul>
    <div v-else>List empty</div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';
export default {
    components: { TodoItem },
    props: {
        tasks: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped>
.todo__list {
    margin-bottom: 50px;
}
.task-list-item {
    display: inline-block;
    margin-right: 10px;
}
.task-list-enter-active,
.task-list-leave-active {
    transition: all 0.4s ease;
}
.task-list-enter-from,
.task-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
}
.task-list-move {
    transition: transform 0.4s ease;
}
</style>
