<template>
  <v-footer dark padless absolute class="component">
    <v-card flat tile class="base white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
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
        'mdi-linkedin',
        'mdi-github',
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