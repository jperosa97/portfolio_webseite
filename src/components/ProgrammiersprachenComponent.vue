<template>
  <!-- Programmiersprachen Section Start-->
  <p> Hier sind einige Technologien, mit denen ich in letzter Zeit gearbeitet habe:</p>
  <v-container fluid style="margin: 0px; padding: 0px; width: 80%">
    <v-row>
      <v-col v-for="item in items" :key="item.id" cols="2">
        <v-chip class="ma-2" variant="outlined" label :color="item.color">
          <v-icon start :icon="item.icon"></v-icon>
          {{ item.title }}
        </v-chip>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        color: 'info',
        icon: 'mdi-language-html5',
        title: 'HTML & CSS',
      },
      {
        color: 'info',
        icon: 'mdi-language-javascript',
        title: 'Javascript',
      },
      {
        color: 'info',
        icon: 'mdi-wordpress',
        title: 'Wordpress',
      },
      {
        color: 'info',
        icon: 'mdi-alpha-c-box-outline',
        title: 'Craft cms',
      },
      {
        color: 'info',
        icon: 'mdi-language-php',
        title: 'PHP & MYSQL',
      },
      {
        color: 'info',
        icon: 'mdi-symfony',
        title: 'Symfony',
      },
      {
        color: 'info',
        icon: 'mdi-laravel',
        title: 'Laravel',
      },
      {
        color: 'info',
        icon: 'mdi-vuejs',
        title: 'Vue Js',
      },
      {
        color: 'info',
        icon: 'mdi-nodejs',
        title: 'Node Js',
      },
    ],
  })
}

</script>
<style></style>