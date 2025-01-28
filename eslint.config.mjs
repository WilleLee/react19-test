import eslintJs from '@eslint/js';
import eslintNext from '@next/eslint-plugin-next';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintImportOrder from 'eslint-plugin-import';
import eslintA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintUnusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslintJs.configs.recommended,
  tseslint.configs.recommended,
  eslintConfigPrettier,
  eslintImportOrder.flatConfigs.recommended,
  {
    plugins: {
      'jsx-a11y': eslintA11y,
    },
    rules: {
      ...eslintA11y.configs.recommended.rules,
    },
  },
  {
    plugins: {
      '@next/next': eslintNext,
    },
    rules: {
      ...eslintNext.configs.recommended.rules,
      ...eslintNext.configs['core-web-vitals'].rules,
    },
  },
  {
    plugins: {
      react: eslintReact,
    },
    rules: {
      ...eslintReact.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  {
    plugins: {
      'unused-imports': eslintUnusedImports,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    plugins: {
      'react-hooks': eslintReactHooks,
    },
    rules: {
      ...eslintReactHooks.configs.recommended.rules,
    },
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'warn',
    },
  },
  {
    rules: {
      'import/order': [
        'warn',
        {
          'newlines-between': 'always',
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/no-unresolved': 'off',
      'import/no-anonymous-default-export': 'off',
    },
  },
);
