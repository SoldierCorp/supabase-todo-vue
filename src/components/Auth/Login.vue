<template>
  <div class="hello">
    <div class="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full">
        <div>
          <h1 class="text-4xl font-extrabold">Todo Vue.js with Supase</h1>

          <h2 class="mt-6 text-center text-2xl leading-9">
            Sign in to your account
          </h2>
          <p class="mt-2 text-center text-sm leading-5">
            Or
            <router-link to="/signup"  class="font-medium text-brand-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
              sign up
            </router-link>
          </p>
        </div>
        <form class="mt-8" action="#" method="POST">
          <input type="hidden" name="remember" value="true">
          <div class="rounded-md shadow-sm">
            <div>
              <input aria-label="Email address" name="email" type="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address">
            </div>
            <div class="-mt-px">
              <input aria-label="Password" name="password" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password">
            </div>
          </div>

          <!-- <div class="mt-6 flex items-center justify-end">
            <div class="text-sm leading-5">
              <a href="#" class="font-medium text-brand-600 focus:outline-none focus:underline transition ease-in-out duration-150">
                Forgot your password?
              </a>
            </div>
          </div> -->

          <div class="mt-6">
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-brand-500 hover:bg-brand-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style scoped>

</style>
