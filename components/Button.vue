<!-- We need to be able to provide a name for the button which will be displayed along with an optional link. It must also be dark mode compatible using @nuxtjs/color-mode and tailwindcss. -->
<!-- NuxtLink needs to be able to read the link from the button and set to to be whatever the link is -->
<script lang="ts">
export default {
    props: {
        name: {
            type: String,
            required: true,
            default: 'Button'
        },
        link: {
            type: String,
            default: '/'
        }
    },
}
</script>

<template>
    <div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <NuxtLink :to="{path: link }">{{ name }}</NuxtLink>
        </button>
    </div>
</template>