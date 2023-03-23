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

### Inspiration 💐

> Our requirements are more modest but at the same time more responsible: 
> buildings, furniture, drinking glasses may well be consumer items that 
> we can destroy without regret after they have served for some short or 
> long period, but while we use them we expect them to fullfill their role and serve us perfectly, so perfectly that we can also derive aesthetic 
> enjoyment from observing them in use. 

Erik Gunnar Asplund on **Swedish Grace**.


