import { defineConfig } from "eslint/config";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";

const OFF = 0;
const WARN = 1;
const ERROR = 2;

export default defineConfig([
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",  // 指向你的 tsconfig.json
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true  // 启用 TSX
        }
      }
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      react: reactPlugin
    },
    rules: {
      // 对象的最后一个可以增加【,】
      '@typescript-eslint/comma-dangle': OFF,
      // 单引号关闭
      '@typescript-eslint/quotes': OFF,
      // 需要分号
      '@typescript-eslint/semi': OFF,
      // 不允许使用var
      'no-var': ERROR,
      // 函数不需要ts标注返回类型
      '@typescript-eslint/explicit-function-return-type': OFF,
      "prefer-const": "error",
      'no-tabs': OFF,
      '@typescript-eslint/indent': OFF,
    }
  },
  {
    ignores: [
      '/lib/**/*', // Ignore built files.
      '**/*.js',
      '/node_modules',
      '/build',
      '/dist'
    ],
  }
]);
