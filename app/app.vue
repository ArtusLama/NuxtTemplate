<template>
    <div>
        <NuxtRouteAnnouncer />
        <NuxtLoadingIndicator />

        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script lang="ts" setup>
useLocaleHead()
</script>
