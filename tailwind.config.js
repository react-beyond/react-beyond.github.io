/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js,jsx,ts,tsx}',
    '!./node_modules',
    '!./build',
    '!./.docusaurus',
    '!./.git'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    // Make grouping variants work
    // E.g.: [&>.active]:x-[border-b,border-b-purple-600]
    // https://github.com/tailwindlabs/tailwindcss/discussions/11701#discussioncomment-6569866
    require('tailwindcss/plugin')(({ matchUtilities }) => {
      matchUtilities({
        x: (value) => ({
          [`@apply ${value.replaceAll(',', ' ')}`]: {}
        })
      })
    })
  ]
}
