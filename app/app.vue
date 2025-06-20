<template>
    <div>
        <NuxtRouteAnnouncer />
        <NuxtLoadingIndicator />

        <ToasterRoot />

        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script lang="ts" setup>
useLocaleHead()
</script>
