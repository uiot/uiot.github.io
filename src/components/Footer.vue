<template>
  <v-footer dark padless absolute class="component">
    <v-card flat tile class="base white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-btn rounded text :href="icon.link">
            <v-icon size="24px">
              {{ icon.icon }}
            </v-icon>
          </v-btn>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0 main-text">
        {{$t('lorenIpsum')}}
      </v-card-text>
      <v-divider/>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong> UioT </strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        {
          icon: 'mdi-linkedin',
          link: 'https://www.linkedin.com/company/uiot/' 
        },
        {
          icon: 'mdi-github',
          link: 'http://www.github.com/uiot' 
        }
      ],
    }),
  }
</script>

<style scoped>

.main-text{
  width: 100%;
}
.component{
  box-shadow: 0 -5px 5px #3a3a3a44;
  position: relative;
  
}
</style>