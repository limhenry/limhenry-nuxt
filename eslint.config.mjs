import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'

export default [
  {
    ignores: ['.nuxt/**', 'dist/**', 'node_modules/**', '.output/**']
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        sourceType: 'module'
      }
    }
  },
  {
    files: ['**/*.ts', '**/*.mts', '**/*.cts'],
    languageOptions: {
      parser: tsParser,
      sourceType: 'module'
    }
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        useHead: 'readonly',
        useRoute: 'readonly',
        ref: 'readonly',
        computed: 'readonly',
        watch: 'readonly',
        defineProps: 'readonly',
        withDefaults: 'readonly',
        defineNuxtConfig: 'readonly',
        navigateTo: 'readonly',
        definePageMeta: 'readonly'
      }
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/max-attributes-per-line': 'off',
      'no-undef': 'off',
      'no-unused-vars': 'off'
    }
  }
]
