const plugin = require('tailwindcss/plugin')

module.exports = {
  presets: [
    require('@marshallu/marsha-tailwind')
  ],
	content: require('fast-glob').sync([
		'./inc/*.php',
		'./inc/*/*.php',
		'./inc/*/*/*.php',
		'./template-parts/*.php',
		'./template-parts/*/*.php',
		'./*.php',
	]),
}
