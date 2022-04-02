<template>
    <section class="todo">
        <h1 class="todo__title">Todo list. Now {{ tasks.length }}</h1>
        <ui-select
            @update:model-value="setSelectedSort"
            :model-value="selectedSort"
            :options="tasksFilters"
            class="todo__select"
        ></ui-select>

        <todo-list
            :tasks="sortedTasks"
            @complete="updateTaskComplete"
        ></todo-list>
        <button
            v-if="hasCompletedTask"
            @click="removeCompletedTasks"
            class="todo__remove"
        >
            remove completed task
        </button>
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
import axios from 'axios';
export default {
    name: 'Home-page',
    components: { UiModal, FormTodo, UiSelect, TodoList },
    data() {
        return {
            isModalVisible: false,
            tasks: [],
            selectedSort: 'all',
            tasksFilters: [
                { name: 'Все', value: 'all' },
                { name: 'Выполенные', value: 'true' },
                { name: 'Активные', value: 'false' },
            ],
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
        setSelectedSort(value) {
            this.selectedSort = value;
        },
        updateTaskComplete(isComplete, task) {
            task.completed = isComplete;
        },
        removeCompletedTasks() {
            this.tasks = this.tasks.filter((item) => !item.completed);
        },
        async fetchTasks() {
            try {
                const res = await axios(
                    'https://jsonplaceholder.typicode.com/todos',
                    {
                        params: {
                            _limit: 10,
                        },
                    }
                );
                this.tasks = res.data;
            } catch (e) {
                console.log('Fetch error', e);
            }
        },
    },
    mounted() {
        this.fetchTasks();
        window.addEventListener('keypress', (event) => {
            if (event.code === 'Enter') {
                this.modalOpen();
            }
        });
    },
    computed: {
        sortedTasks() {
            if (this.selectedSort == 'all') return this.tasks;
            return [...this.tasks].filter(
                (item) => item.completed == JSON.parse(this.selectedSort)
            );
        },
        hasCompletedTask() {
            return this.tasks.filter((item) => item.completed).length > 0;
        },
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
    // todo__select
    &__select {
        margin-bottom: 10px;
    }
    // todo__remove
    &__remove {
        @include button();
        display: flex;
        margin: 0 auto;
        margin-bottom: 20px;
    }
}
</style>
