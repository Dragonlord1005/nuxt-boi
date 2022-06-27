<template>
    <div>
        <Head>
            <Title>Posts</Title>
            <Meta name="description" content="Blog Posts" />
        </Head>

    </div>
    <div>
        <h1 class="text-5xl flex justify-center">Posts</h1>
        <div>
            <button class="bg-blue-400 rounded-full flex py-2 px-4 ml-3 hover:bg-blue-700">
                <NuxtLink to="/posts/first-post" class="text-l flex justify-center text-white font-bold">First Post</NuxtLink>
            </button>
        </div>
    </div>
</template>