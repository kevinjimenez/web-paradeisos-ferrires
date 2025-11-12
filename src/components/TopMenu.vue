<template>
  <!-- <nav class="fixed top-0 left-0 z-20 w-full bg-red-500 py-2.5 px-6 sm:px-4"> -->
  <nav class="w-full py-2.5 px-6 sm:px-4 bg-white">
    <a href="#" class="flex flex-col items-center justify-center my-4">
      <span
        class="self-center whitespace-nowrap text-4xl font-semibold text-primary tracking-[.25em]"
        >PARADEISOS®</span
      >
      <span
        class="self-center whitespace-nowrap text-xl font-semibold text-secondary tracking-[.25em]"
        >FERRIES</span
      >
    </a>
    <hr class="border-t border-gray-400 my-4 mx-32" />
    <div class="container mx-auto flex flex-wrap items-center justify-center">
      <div class="mt-2 sm:mt-0 sm:flex md:order-2">
        <!-- Register Button -->
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
        id="navbar-sticky"
      >
        <ul
          class="mt-4 flex flex-col rounded-lg p-4 md:mt-0 md:flex-row md:space-x-32 md:border-0 md:text-sm md:font-medium"
        >
          <li>
            <a
              href="#"
              class="block rounded bg-primary py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-primary"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-primary"
              >About</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-primary"
              >Services</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-primary"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts"></script>
