<template>
    <div>
        <p>{{ $t("welcome") }}</p>
        <UiButton @click="onBtnClick">
            <Icon name="lucide:box" />
            Click Me
        </UiButton>
        <ColorSchemeSwitchButton />
    </div>
</template>

<script lang="ts" setup>
function onBtnClick() {
    useToast().success("Button clicked!", {
        description: "You clicked the button successfully.",
        duration: 3000,
    })
}
</script>
