## CSS

Units and themes with a dash of typescript. 

This repo can be extended with the concept of **groups**. More info on it's repo, check [demo](https://github.com/polmoneys/css-group).

### Get started 

Fill with your design system tokens, author CSS and declare what should be transformed by postcss on `index.css`.  


```bash

   yarn build

```

A **classNames.ts** file for easy consumption of **units**.
Picked tokens on [postcss.config.cjs](https://github.com/polmoneys/boost/tree/master/css/postcss.config.cjs) will be exported as **css-tokens.js** in **dist** folder so that you may consume values in **js**. 