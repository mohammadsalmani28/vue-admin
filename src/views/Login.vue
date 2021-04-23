<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-row>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-2" style="color: #E91E63;">Login</h1>
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
                      <v-text-field label="Email" name="Email" prepend-icon="mdi-email" type="text"/>
                      <v-text-field id="password" label="Password" name="password" prepend-icon="mdi-lock"
                                    type="password"/>
                    </v-form>
                    <h3 class="text-center mt-4">Forgot your password?</h3>
                  </v-card-text>
                  <div class="text-center mt-3">
                    <v-btn rounded dark color="#E91E63">SIGN IN</v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="4" style="background-color: #E91E63;">
                  <v-card-text class="white--text mt-12">
                    <h1 class="text-center display-1">Hello, Friend!</h1>
                    <h5 class="text-center">Enter your personal details and start journey with us</h5>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn rounded outlined dark :to="'/register'">SIGN UP</v-btn>
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
