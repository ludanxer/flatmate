<template>
  <div id="authentication">
    <section class="text-gray-600">
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="font-medium text-3xl text-gray-900">
            Welcome to OFlatmate
          </h1>
          <p class="leading-relaxed mt-4">
            A project driven by community to make flat sharing easier
          </p>
        </div>
        <div
          class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
        >
          <div id="firebaseui-auth-container"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { DEFAULT_SIGNIN_PATH } from '@/utils'
import { authProviders } from '@/firebaseConfig'

export default {
  mounted() {
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(this.$auth)

    const nextPath = this.$route.redirectedFrom
      ? this.$route.redirectedFrom.fullPath
      : DEFAULT_SIGNIN_PATH

    /*
      Set user in `signInSuccessWithAuthResult` callback won't help,
      cuz there will be a refresh after authentication which will clear vuex,
      even if there isn't, a user manual refresh will lost the state anyway
    */

    ui.start('#firebaseui-auth-container', {
      signInSuccessUrl: nextPath,
      signInOptions: Object.values(authProviders).map(
        (provider) => provider.PROVIDER_ID
      ),
    })
  },
}
</script>
