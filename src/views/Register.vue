<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-row class="fill-height">
                <v-col cols="12" md="4" style="background-color: #E91E63;">
                  <v-card-text class="white--text mt-12">
                    <h1 class="text-center display-1">Welcome Back!</h1>
                    <h5 class="text-center">To Keep connected with us please login with your personnel info</h5>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn rounded outlined dark :to="'/login'">Login</v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-2" style="color: #E91E63;">Create Account</h1>
                    <div class="text-center mt-4">
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon v-text="'mdi-facebook'"/>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon v-text="'mdi-google'"/>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon v-text="'mdi-linkedin'"/>
                      </v-btn>
                    </div>
                    <h4 class="text-center mt-4">Ensure your email for registration</h4>
                    <v-form>
                      <v-text-field label="Name" name="Name" prepend-icon="mdi-account" type="text"/>
                      <v-text-field label="Email" name="Email" prepend-icon="mdi-email" type="text"/>
                      <v-text-field id="password" label="Password" name="password" prepend-icon="mdi-lock" type="password"/>
                    </v-form>
                  </v-card-text>
                  <div class="text-center mt-n5">
                    <v-btn rounded color="#E91E63" dark>SIGN UP</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      step: 1,
    }),
  }
</script>
