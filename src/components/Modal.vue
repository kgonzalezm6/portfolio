<script setup>
    const props = defineProps({
        open:{
            type: Boolean,
            default : false
        },
        title : {
            type : String,
            // default : 'Escribe título'
        },
        icon : ''
    })
    defineOptions({
        inheritAttrs: false
    })
</script>

<template>
    <Transition>
        <div v-show="props.open" class ='inset-0 fixed h-screen bg-gray-900 bg-opacity-40 z-30 overflow-y-auto'>
            <div  class="relative flex justify-center mt-6">
                <div class = "bg-white mx-4 max-w-full min-w-min rounded-lg shadow-lg border-2 overflow-hidden p-2" v-bind="$attrs">
                    <header class="flex items-center gap-x-2 py-2">
                        <icon v-if="props.icon" :icon="props.icon" class="text-orange-500 text-2xl" />
                        <span class="text-2xl text-blue-muni font-semibold tracking-tight">{{ props.title }}</span>       
                    </header>
                    <hr>
                    <section class="py-4 px-4">
                        <slot></slot>
                    </section>
                    <hr>
                    <footer class= "text-right p-4 flex justify-between">
                        <slot name="footer"></slot>
                    </footer>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style>
    .v-enter-active, .v-leave-active {
        transition: opacity 0.5s ease;
    }

    .v-enter-from, .v-leave-to {
        opacity: 0;
    }
</style>