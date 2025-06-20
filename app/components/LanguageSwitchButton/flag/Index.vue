<template>
    <Icon :name="`circle-flags:${localeCode}`" />
</template>

<script lang="ts" setup>
defineProps<{
    localeCode: string
}>()
</script>
