<template>
    <nav class="breadcrumb">
        <ol class="list-none p-0 inline-flex">
            <li class="breadcrumb-item" v-for="(crumb, index) in crumbs" :key="index">
                <a :href="crumb.url">{{ crumb.label }}</a> <span v-if="crumbs.length !== (index + 1)"> /</span>
            </li>
        </ol>
    </nav>
</template>

<script>
export default {
    props: {
        crumbs: {
            type: Array,
            required: true
        }
    }
};
</script>

<style scoped>
.breadcrumb {
    font-size: 14px;
    padding: 10px;
}

.breadcrumb-item {
    margin-right: 5px;
}

.breadcrumb-item:last-child {
    font-weight: bold;
    color: #4b5563; /* Tailwind Gray 700 */
}
</style>
