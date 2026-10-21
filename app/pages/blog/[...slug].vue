<script setup>
const route = useRoute()
const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Artículo no encontrado', fatal: true })
}

useSeoMeta({
  title: post.value.title,
  description: post.value.description
})
</script>

<template>
  <main class="lectura">
    <article>
      <img class="destacada" :src="post.image" :alt="post.title">
      <p class="meta">
        Por {{ post.author }} · {{ new Date(post.date).toLocaleDateString('es-CR') }}
        <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
      </p>
      <ContentRenderer :value="post" />
    </article>
    <h2>Comentarios</h2>
    <CommentsUtterances repo="ALVARADOUMANA/desktec-comentarios" />
    <p><NuxtLink to="/blog">← Volver al blog</NuxtLink></p>
  </main>
</template>
