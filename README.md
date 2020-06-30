# Chuck Norris Jokes

## Playground with Svelte and Sapper

## Build

- clone repo and run command `npm install`
- run in dev mode using command `npm run dev`

## Export static site

- 2 available options:
  - `npm run export` - exports static site with client side routing/rendering and data fetching
  - `API_LESS=true npm run export` - exports static website without client side rendering (it will contains static data which will be fetch during export).
- after export run `npx serve __sapper__/export ` to start static server to run the app

## Demo

- with client side rendering: https://peaceful-hoover-0b12ea.netlify.app
- no client side rendering: https://romantic-boyd-7b03ae.netlify.app