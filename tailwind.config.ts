/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';


export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  mode: 'jit'
};
