<template>
    <section class="todo">
        <h1 class="todo__title">Todo list. Now {{ totalCount }}</h1>
        <div class="todo__head">
            <ui-select
                @update:model-value="setSelectedSort"
                :model-value="selectedSort"
                :options="tasksFilters"
                class="todo__select"
            ></ui-select>
            <button
                v-if="hasCompletedTask"
                @click="removeCompletedTasks"
                class="todo__remove"
            >
                remove completed task
            </button>
        </div>

        <todo-list v-if="!isTasksLoading" :tasks="sortedTasks"></todo-list>
        <div v-else>Loading...</div>
    </section>
    <ui-modal v-model:show="isModalVisible">
        <form-todo @create="addTodo"></form-todo>
    </ui-modal>
</template>

<script>
import UiModal from '@/components/ui/uiModal.vue';
import FormTodo from '@/components/FormTodo.vue';
import UiSelect from '@/components/ui/uiSelect.vue';
import TodoList from '@/components/TodoList.vue';
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
export default {
    name: 'Home-page',
    components: { UiModal, FormTodo, UiSelect, TodoList },
    data() {
        return {
            isModalVisible: false,
        };
    },
    methods: {
        addTodo(todo) {
            this.tasks.push(todo);
            this.isModalVisible = false;
        },
        modalOpen() {
            this.isModalVisible = true;
        },
        ...mapActions({
            fetchTasks: 'todo/fetchTasks',
        }),
        ...mapMutations({
            removeCompletedTasks: 'todo/removeCompletedTasks',
            setSelectedSort: 'todo/setSelectedSort',
        }),
    },
    beforeUnmount() {
        localStorage.setItem('store', JSON.stringify(this.$store.state));
    },
    created() {
        if (localStorage.getItem('store')) {
            this.$store.replaceState(
                Object.assign(
                    {},
                    this.$store.state,
                    JSON.parse(localStorage.getItem('store'))
                )
            );
        }
        window.addEventListener('beforeunload', () => {
            localStorage.setItem('store', JSON.stringify(this.$store.state));
        });
    },
    mounted() {
        window.addEventListener('keypress', (event) => {
            if (event.code === 'Enter') {
                this.modalOpen();
            }
        });
    },
    computed: {
        ...mapGetters({
            sortedTasks: 'todo/sortedTasks',
            hasCompletedTask: 'todo/hasCompletedTask',
            totalCount: 'todo/totalCount',
        }),
        ...mapState({
            tasks: (state) => state.todo.tasks,
            selectedSort: (state) => state.todo.selectedSort,
            isTasksLoading: (state) => state.todo.isTasksLoading,
            tasksFilters: (state) => state.todo.tasksFilters,
        }),
    },
};
</script>
<style lang="scss">
.todo {
    @include x-container();
    margin: 0 auto;
    padding-top: 30px;
    // todo__title
    &__title {
        margin-bottom: 0.9375rem;
        font-size: 3rem;
        text-align: center;
        color: var(--color-green);
    }
    // todo__head
    &__head {
        display: flex;
        margin-bottom: 10px;
    }
    // todo__select
    &__select {
    }
    // todo__remove
    &__remove {
        @include button();
        margin: 0 auto;
    }
}
</style>
