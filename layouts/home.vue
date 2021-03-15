<template>
  <div class="dark:bg-gray-900 bg-white min-h-screen">
    <layout-nav :show-avatar="false" />
    <div class="w-full max-w-5xl mx-auto">
      <div class="lg:flex">
        <aside
          class="h-screen sticky top-0 border-gray-100 hidden p-4 lg:pt-10 lg:block lg:border-r lg:w-96 dark:border-transparent"
        >
          <img
            src="https://s.gravatar.com/avatar/a5f485272d3ff15711f33bcf4f4c839f?s=150"
            alt="Phuong Phung's Avatar"
            class="rounded-full w-32"
          />

          <h2
            class="font-medium text-xl mb-2 mt-4 text-gray-700 dark:text-gray-50"
          >
            Phuong Phung
            <a
              href="https://github.com/senpp"
              rel="noopener noreferrer"
              target="_blank"
              class="text-purple-600 hover:underline"
            >
              @senpp
            </a>
          </h2>

          <p class="text-gray-600 dark:text-gray-400">
            Blog của tôi không viết 100% về code, nó còn là về cuộc sống của
            tôi!
          </p>
        </aside>

        <main
          class="w-full flex-auto p-2 lg:px-12 md:p-4 lg:py-6 lg:pt-10 lg:static lg:max-h-full"
        >
          <Nuxt />
        </main>
      </div>
    </div>
  </div>
</template>
