<template>
  <div id="settings-wrapper">
    <v-card id="settings" class="py-2 px-4" color="rgba(0, 0, 0, .3)" dark flat link min-width="100"
            style="position: fixed; top: 115px; right: -35px; border-radius: 8px; z-index: 1;">
      <v-icon large>mdi-cog</v-icon>
    </v-card>

    <v-menu v-model="menu" :close-on-content-click="false" activator="#settings" bottom content-class="v-settings" left
            nudge-left="8" offset-x origin="top right" transition="scale-transition">
      <v-card class="text-center mb-0" width="300">
        <v-card-text>
          <v-row align="center" no-gutters>
            <v-col cols="auto">Dark Mode</v-col>
            <v-spacer/>
            <v-col cols="auto">
              <v-switch v-model="$vuetify.theme.dark" class="ma-0 pa-0" color="secondary" hide-details/>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
  // Mixins
  import Proxyable from 'vuetify/lib/mixins/proxyable'

  export default {
    name: 'DashboardCoreSettings',

    mixins: [Proxyable],

    data: () => ({
      menu: false,
    }),
  }
</script>

<style lang="sass">
.v-settings
  .v-item-group > *
    cursor: pointer

  &__item
    border-width: 3px
    border-style: solid
    border-color: transparent !important

    &--active
      border-color: #00cae3 !important
</style>
