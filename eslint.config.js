import js from "@eslint/js"
import globals from "globals"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import pluginPrettier from "eslint-plugin-prettier"
import prettierConfig from "eslint-config-prettier"

export default [
	{ ignores: ["dist"] },
	{
		files: ["**/*.{js,jsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: "latest",
				ecmaFeatures: { jsx: true },
				sourceType: "module",
			},
		},
		settings: { react: { version: "detect" } },
		plugins: {
			react,
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
			prettier: pluginPrettier,
		},
		rules: {
			...js.configs.recommended.rules,
			...react.configs.recommended.rules,
			...react.configs["jsx-runtime"].rules,
			...reactHooks.configs.recommended.rules,
			...prettierConfig.rules, // Отключает конфликтующие правила
			"react/jsx-no-target-blank": "off",
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],
			// Правило, которое предупреждает о console.log в коде
			"no-console": "warn",

			// Правило, которое требует использовать строгое сравнение (=== вместо ==)
			eqeqeq: "error",

			// Правило для использования табуляции в качестве отступов (предупреждение)
			indent: ["warn", "tab"],

			// Запрещает использование var, предпочитаем let/const
			"no-var": "error",

			// Требует использовать const, если переменная не изменяется
			"prefer-const": "error",

			// Запрещает использование неопределенных переменных
			"no-undef": "error",

			// Интеграция с Prettier: если форматирование некорректно, генерируется ошибка
			"prettier/prettier": "error",

			// Запрещает дублирование пропсов в JSX
			"react/jsx-no-duplicate-props": "error",

			// Отключает требование для импорта React в JSX (для React 17 и выше это не нужно)
			"react/react-in-jsx-scope": "off",
			"react/prop-types": "off",
		},
	},
]
