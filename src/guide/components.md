# Components

## Accordion
... Coming soon. Stay tune.
## Alert

::: details template
``` html
<template>
  <SBAlert>my alert message</SBAlert>

  <!-- add background-color -->
  <SBAlert variant="primary">my alert message</SBAlert>
</template>
```

```js
import { SBAlert } from 'superbvue'

export default defineComponent({
  components: {
    SBAlert
  }
})
```
:::

::: details jsx
```js
import { SBAlert } from 'superbvue'

export default defineComponent({
  render() {
    return (
      <div>
        <SBAlert>my alert message</SBAlert>

        // add background-color
        <SBAlert variant="primary">my alert message</SBAlert>
      </div>
    )
  }
})
```
:::

| Property | Type | Default | Description |
| ------------- |:-------------: | :-----: | :-------------: |
| disabled | Boolean | false | |
| onClick | Function | | |
| class | String | | |
| variant | String |  | Set background color. `primary | secondary | success | danger | warning | info | light | dark` |

## Badge

::: details template
``` html
<template>
  <SBBadge>my badge</SBBadge>

  <!-- pill badge1 -->
  <SBBadge pill>my pill badge</SBBadge>
</template>
```

```js
import { SBBadge } from 'superbvue'

export default defineComponent({
  components: {
    SBBadge
  }
})
```
:::

::: details jsx
```js
import { SBBadge } from 'superbvue'

export default defineComponent({
  render() {
    return (
      <div>
        <SBBadge>my badge</SBBadge>
  
         // pill badge
        <SBBadge pill>my pill badge</SBBadge>
      </div>
    )
  }
})
```
:::


| Property | Type | Default | Description |
| ------------- |:-------------: | :-----: | :-------------: |
| size | String |  | |
| pill | Boolean | | |
| class | String | | |
| href | String | | |
| variant | String |  | Set background color. `primary | secondary | success | danger | warning | info | light | dark` |








## Breadcrumb
... Coming soon. Stay tune.
## Buttons
::: details template
``` html
<template>
  <SBButton pill>button 1</SBButton>
  <SBButton size="lg">button 2</SBButton>
</template>
```
:::

::: details jsx
```jsx
export default defineComponent({
  render() {
    return (
      <Fragment>
        <SBButton pill>button 1</SBButton>
        <SBButton size="lg">button 2</SBButton>
      </Fragment>
    )
  }
})
```
:::

| Property | Type | Default | Description |
| ------------- |:-------------: | :-----: | :-------------: |
| disabled | Boolean | false | |
| toggle | Boolean | false | |
| pressed | Boolean | false | |
| block | Boolean | false | |
| pill | Boolean | false | |
| squared | Boolean | false | |
| active | Boolean | false | |
| size | String | md | Set button size. `sm | md | lg` |
| type | String | button | |
| variant | String |  | Set color on button. `primary | secondary | success | danger | warning | info | light | dark` |

## Button group
... Coming soon. Stay tune.
## Card
... Coming soon. Stay tune.
## Carousel
... Coming soon. Stay tune.
## Close button
... Coming soon. Stay tune.
## Collapse
... Coming soon. Stay tune.
## Dropdowns
... Coming soon. Stay tune.
## Listgroup
... Coming soon. Stay tune.
## Modal
... Coming soon. Stay tune.
## Navs & tabs
... Coming soon. Stay tune.
## Navbar
... Coming soon. Stay tune.
## Pagination
... Coming soon. Stay tune.
## Popovers
... Coming soon. Stay tune.
## Progress
... Coming soon. Stay tune.
## Scrollspy
... Coming soon. Stay tune.
## Spinners
::: details template
``` html
<template>
  <SBSpinners />
  <SBSpinners type="glow" />
</template>
```
:::

::: details jsx
```jsx
export default defineComponent({
  render() {
    return (
      <Fragment>
        <SBSpinners />
        <SBSpinners type="glow" />
      </Fragment>
    )
  }
})
```
:::

| Property | Type | Default | Description |
| ------------- |:-------------: | :-----: | :-------------: |
| label | Boolean | false | |
| type | String | border  | Set spinner type. `border | glow` |
| small | Boolean | false | |
| variant | Boolean | false | |
| class | String | false | |
| squared | Boolean | false | |
## Toasts
... Coming soon. Stay tune.
## Tooltips
... Coming soon. Stay tune.

##
