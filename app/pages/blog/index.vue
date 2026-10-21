<script setup>
const { data: posts } = await useAsyncData('blog-list', () => {
  return queryCollection('blog')
    .order('date', 'DESC')
    .select('path', 'title', 'description', 'author', 'date', 'image', 'tags')
    .all()
})
</script>

<template>
  <main class="lectura">
    <h1>Blog</h1>
    <ul class="lista">
      <li v-for="post in posts" :key="post.path">
        <NuxtLink :to="post.path">
          <img :src="post.image" :alt="post.title">
          <div>
            <h2>{{ post.title }}</h2>
            <p>{{ post.description }}</p>
            <small>{{ post.author }} · {{ new Date(post.date).toLocaleDateString('es-CR') }}</small>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>
