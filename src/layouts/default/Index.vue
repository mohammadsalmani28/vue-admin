<template>
  <v-app>
    <default-bar/>

    <sidebar/>

    <default-view/>

    <default-footer/>
  </v-app>
</template>

<script>
  export default {
    name: 'DefaultLayout',

    components: {
      DefaultBar: () => import(
        /* webpackChunkName: "default-app-bar" */
        './AppBar'
        ),
      Sidebar: () => import(
        /* webpackChunkName: "default-drawer" */
        './Sidebar'
        ),
      DefaultFooter: () => import(
        /* webpackChunkName: "default-footer" */
        './Footer'
        ),
      DefaultView: () => import(
        /* webpackChunkName: "default-view" */
        './View'
        ),
    },
  }
</script>
