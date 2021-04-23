<template>
  <v-navigation-drawer id="sidebar" v-model="sidebar" :dark="dark" :right="$vuetify.rtl" :src="image"
                       :mini-variant.sync="mini" mini-variant-width="80" app width="260">
    <template v-if="sidebarImage" #img="props">
      <v-img :key="image" :gradient="gradient" v-bind="props"/>
    </template>

    <div class="px-2">
      <sidebar-header/>
      <v-divider class="mx-3 mb-2"/>
      <default-list :items="items"/>
    </div>

    <template #append>
      <div class="pa-4 text-center">
        Sidebar Footer
      </div>
    </template>

    <div class="pt-12"/>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import { get, sync } from 'vuex-pathify'

  export default {
    name: 'Sidebar',
    components: {
      SidebarHeader: () => import(
        './widgets/SidebarHeader'
        ),
      DefaultList: () => import(
        './List'
        ),
    },
    data () {
      return {
        items: [
          {
            title: 'Dashboard',
            icon: 'mdi-view-dashboard',
            to: '/',
          },
          {
            title: 'User Profile',
            icon: 'mdi-account',
            to: '/profile/',
          },
          {
            title: 'Regular Tables',
            icon: 'mdi-clipboard-outline',
            to: '/tables/regular/',
          },
          {
            title: 'Typography',
            icon: 'mdi-format-font',
            to: '/components/typography/',
          },
          {
            title: 'Icons',
            icon: 'mdi-chart-bubble',
            to: '/components/icons/',
          },
          {
            title: 'Google Maps',
            icon: 'mdi-map-marker',
            to: '/maps/google/',
          },
          {
            title: 'Notifications',
            icon: 'mdi-bell',
            to: '/notifications/',
          },
          {
            title: 'Pages',
            icon: 'mdi-file-find',
            items: [
              {
                title: '404 Page Not Found',
                to: '/notFound',
              },
              {
                title: 'Login',
                to: '/login',
              },
              {
                title: 'Register',
                to: '/register',
              },
            ],
          },
        ],
        image: process.env.VUE_APP_SIDEBAR_IMAGE != null ? process.env.VUE_APP_SIDEBAR_IMAGE : 'https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-1.jpg',
      }
    },
    computed: {
      ...get('user', [
        'dark',
        'gradient',
      ]),
      ...sync('app', [
        'sidebar',
        'sidebarImage',
        'mini',
      ]),
    },
  }
</script>

<style lang="sass">
#sidebar
  .v-list-item
    margin-bottom: 8px

  .v-list-item::before,
  .v-list-item::after
    display: none

  .v-list-group__header__prepend-icon,
  .v-list-item__icon
    margin-top: 12px
    margin-bottom: 12px
    margin-left: 4px

  &.v-navigation-drawer--mini-variant
    .v-list-item
      justify-content: flex-start !important
</style>
