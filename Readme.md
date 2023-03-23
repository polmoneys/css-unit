## CSS

**Units** and how to theme them. With a dash of typescript. 

Code can be extended with the concept of **groups**. More info on it's repository, has [demo](https://github.com/polmoneys/css-group).

### Get started 

Fill with your design system tokens, author CSS and declare what should be transformed by postcss on `index.css`.  


```bash

   yarn build

```

A **classNames.ts** file for easy consumption of **units**.
Picked tokens on [postcss.config.cjs](https://github.com/polmoneys/boost/tree/master/css/postcss.config.cjs) will be exported as **css-tokens.js** in **dist** folder so that you may consume values in **js**. 