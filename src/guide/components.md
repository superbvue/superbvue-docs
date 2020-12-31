# Components

<!-- ## Accordion -->
<!-- ... Coming soon. Stay tune. -->
## Alert

::: details template
``` html
<template>
  <SBAlert>primary alert—check it out!</SBAlert>

  <!-- add background-color -->
  <SBAlert variant="secondary">secondary alert—check it out!</SBAlert>
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
*Output*
<SBAlert />

:::

::: details jsx
```js
import { SBAlert } from 'superbvue'

export default defineComponent({
  render() {
    return (
      <div>
        <SBAlert>primary alert—check it out!</SBAlert>

        // add background-color
        <SBAlert variant="secondary">secondary alert—check it out!</SBAlert>
      </div>
    )
  }
})
```
*Output*
<SBAlert />
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
*Output*
<SBBadge />
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
*Output*
<SBBadge />
:::


| Property | Type | Default | Description |
| ------------- |:-------------: | :-----: | :-------------: |
| size | String |  | |
| pill | Boolean | | |
| class | String | | |
| href | String | | |
| variant | String |  | Set background color. `primary | secondary | success | danger | warning | info | light | dark` |








## Breadcrumb
::: details template
``` html
<template>
  <SBBreadcrumb :items="state.items" />
</template>
```
```js
export default defineComponent({
  data() {
    return {
      state: {
        items: [
          { text: 'Home', href: "/", active: false }, 
          { text: 'Library', href: "/library", active: true }
        ]
      }
    }
  }
})
```
*Output*
<SBBreadCrumb />
:::

::: details jsx
```jsx
export default defineComponent({
  data() {
    return {
      state: {
        items: [
          { text: 'Home', href: "/", active: false }, 
          { text: 'Library', href: "/library", active: true }
        ]
      }
    }
  },
  render() {
    return (
      <Fragment>
        <SBBreadcrumb items={this.state.items} />
      </Fragment>
    )
  }
})
```
*Output*
<SBBreadCrumb />
:::

| Property | Type | Default | Description |
| ------------- |:-------------: | :-----: | :-------------: |
| items | Array of object |  | see SBBreadCrumbItem for info |

## Button
::: details template
``` html
<template>
  <SBButton variant="primary">Primary</SBButton>
  <SBButton size="lg">Large button</SBButton>
</template>
```
*Output*
<SBButton />
:::

::: details jsx
```jsx
export default defineComponent({
  render() {
    return (
      <Fragment>
        <SBButton variant="primary">Primary</SBButton>
        <SBButton size="lg">Large button</SBButton>
      </Fragment>
    )
  }
})
```
*Output*
<SBButton />
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

<!-- ## Button group
... Coming soon. Stay tune. -->
<!-- ## Card
... Coming soon. Stay tune. -->
<!-- ## Carousel
... Coming soon. Stay tune. -->
<!-- ## Close button
... Coming soon. Stay tune. -->
<!-- ## Collapse
... Coming soon. Stay tune. -->
<!-- ## Dropdowns
... Coming soon. Stay tune. -->
<!-- ## Listgroup
... Coming soon. Stay tune. -->
<!-- ## Modal
... Coming soon. Stay tune. -->
## Navs & tabs
::: details template
``` html
<template>
  <SBNavs>
    <SBNavLink active>Active</SBNavLink>
    <SBNavLink>Link</SBNavLink>
    <SBNavLink>Another Link</SBNavLink>
    <SBNavLink disabled>Disabled Link</SBNavLink>
  </SBNavs>
</template>
```
<!-- ```js
export default defineComponent({
  data() {
  }
})
``` -->
*Output*
<SBNavs />
:::

::: details jsx
```jsx
export default defineComponent({
  render() {
    return (
      <Fragment>
        <SBNavs>
          <SBNavLink active>Active</SBNavLink>
          <SBNavLink>Link</SBNavLink>
          <SBNavLink>Another Link</SBNavLink>
          <SBNavLink disabled>Disabled Link</SBNavLink>
        </SBNavs>
      </Fragment>
    )
  }
})
```
*Output*
<SBNavs />
:::
*SBNavs Property*
| Property | Type | Default | Description |
| ------------- |:-------------: | :-----: | :-------------: |
| value | Number | | |
| justify | Boolean | | horizontal alignment |
| tabs | Boolean | |  |
| vertical | Boolean | | |
| pills | Boolean | | |
| class | String | | |
| style | String | | |
| id | String | | |
| size | String | md | set nav size. `sm | md | lg` |

*SBNavLink Property*
| Property | Type | Default | Description |
| ------------- |:-------------: | :-----: | :-------------: |
| href | String | | |
| rel | String | | horizontal alignment |
| target | String | |  |
| active | Boolean | | |
| disabled | Boolean | | |
| to | String | | |
| append | Boolean | | |
| replace | Boolean | | |
| activeClass | String | | |
| exact| Boolean | | |
| exactActiveClass | String | | |
| style| String | | |
| id | String | | |
| size | String | md | set nav size. `sm | md | lg` |

<!-- ## Navbar
... Coming soon. Stay tune. -->
<!-- ## Pagination
... Coming soon. Stay tune. -->
<!-- ## Popovers
... Coming soon. Stay tune. -->
## Progress

::: details template
``` html
<template>
  <SBProgress :value="state.progressValue" variant="warning" />

  <!-- Add label -->
  <SBProgress :value="state.progressValue" :label="state.progressValue" variant="warning" />

  <!-- Multiple Progress bars -->
  <SBProgress max="100" :label="state.progressValue">
    <SBProgressBar :value="state.progressValue" :label="state.value" variant="warning" />
    <SBProgressBar :value="20" :label="state.value" variant="success" />
  </SBProgress>
</template>
```

```js
import { SBProgress, SBProgressBar } from 'superbvue'

export default defineComponent({
  components: {
    SBProgress,
    SBProgressBar
  },
  setup() {
    const state = reactive({
      progressValue: 75
    })

    return {
      state
    }
  }
})
```
*Output*
<SBProgress />
:::

::: details jsx
```jsx
import { SBProgress, SBProgressBar } from 'superbvue'

export default defineComponent({
  setup() {
    const state = reactive({
      progressValue: 75
    })

    return {
      state
    }
  },
  render() {
    return (
      <div>
        <SBProgress value={this.state.progressValue} variant="warning" />

        // Add label
        <SBProgress value={this.state.progressValue} label={this.state.progressValue} variant="warning" />

        // Multiple Progress bars
        <SBProgress max={100} label={this.state.progressValue} variant="warning">
          <SBProgressBar value={this.state.progressValue} label={this.state.progressValue} variant="warning" />
        </SBProgress>
      </div>
    )
  }
})
```
*Output*
<SBProgress />
:::

| Property | Type | Default | Description |
| ------------- |:-------------: | :-----: | :-------------: |
| value | Number | | |
| striped | Boolean | | Striped |
| animated | Boolean | | Animated stripes |
| height | String | | |
| showProgress | Boolean | | |
| showValue | Boolean | | |
| variant | String |  | Set background color. `primary | secondary | success | danger | warning | info | light | dark` |

<!-- ## Scrollspy
... Coming soon. Stay tune. -->
## Spinners
::: details template
``` html
<template>
  <SBSpinners />
  <SBSpinners type="glow" />
</template>
```
*Output*
<SBSpinner />
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
*Output*
<SBSpinner />
:::

| Property | Type | Default | Description |
| ------------- |:-------------: | :-----: | :-------------: |
| label | Boolean | false | |
| type | String | border  | Set spinner type. `border | glow` |
| small | Boolean | false | |
| variant | Boolean | false | |
| class | String | false | |
| squared | Boolean | false | |
<!-- ## Toasts
... Coming soon. Stay tune.
## Tooltips
... Coming soon. Stay tune. -->

## Table

::: details template
```html
<template>
  <!-- Basic table -->
  <SBTable v-bind:fields="state.fields" v-bind:items="state.items" />
</template>
```
```js
import { SBTable } from 'superbvue'

export default defineComponent({
  components: {
    SBTable
  },
  data() {
    return {
      state: {
        items: [
          { isActive: true, age: 40, fistName: 'Dickerson', lastName: 'Macdonald' },
          { isActive: false, age: 21, fistName: 'Larsen', lastName: 'Shaw' },
          { isActive: false, age: 89, fistName: 'Geneva', lastName: 'Wilson' },
          { isActive: true, age: 38, fistName: 'Jami', lastName: 'Carney' }
        ],
        fields: ['Age', 'First', 'last']
      }
    }
  }
})
```
*Output*
<SBTable />

<br />

*Using variants for table cells*

```html
<template>
  <!-- Using variants for table cells -->
  <SBTable v-bind:fields="state.fields" v-bind:items="state.items" />
</template>
```
```js
import { SBTable } from 'superbvue'

export default defineComponent({
  components: {
    SBTable
  },
  data() {
    return {
      state: {
        items: [
          { isActive: true, age: 40, fistName: 'Dickerson', lastName: 'Macdonald' },
          { isActive: false, age: 21, fistName: 'Larsen', rowVariant: 'primary', lastName: 'Shaw' },
          { isActive: false, age: 89, fistName: 'Geneva', lastName: 'Wilson' },
          { isActive: true, age: 38, fistName: 'Jami', lastName: 'Carney', cellVariant: { fistName: 'info' } }
        ],
        fields: ['Age', 'First', 'last']
      }
    }
  }
})
```
*Output*
<SBTable />
:::

::: details jsx
```jsx
import { SBTable } from 'superbvue'

export default defineComponent({
  data() {
    return {
      state: {
        items: [
          { isActive: true, age: 40, fistName: 'Dickerson', lastName: 'Macdonald' },
          { isActive: false, age: 21, fistName: 'Larsen', lastName: 'Shaw' },
          { isActive: false, age: 89, fistName: 'Geneva', lastName: 'Wilson' },
          { isActive: true, age: 38, fistName: 'Jami', lastName: 'Carney' }
        ],
        fields: ['Age', 'First', 'last']
      }
    }
  },
  render() {
    return (
      <Fragment>
        {/*  Basic table */}
        <SBTable fields={this.state.field} items={this.state.items} currentPage={this.state.currentPage} perPage={this.state.perPage} />
      </Fragment>
    )
  }
})
```
*Output*
<SBTable />

<br />

*Using variants for table cells*

```jsx
import { SBTable } from 'superbvue'

export default defineComponent({
  data() {
    return {
      state: {
        items: [
          { isActive: true, age: 40, fistName: 'Dickerson', lastName: 'Macdonald' },
          { isActive: false, age: 21, fistName: 'Larsen', rowVariant: 'primary', lastName: 'Shaw' },
          { isActive: false, age: 89, fistName: 'Geneva', lastName: 'Wilson' },
          { isActive: true, age: 38, fistName: 'Jami', lastName: 'Carney', cellVariant: { fistName: 'info' } }
        ],
        fields: ['Age', 'First', 'last']
      }
    }
  },
  render() {
    return (
      <Fragment>
        {/*  Using variants for table cells */}
        <SBTable fields={this.state.field} items={this.state.items} currentPage={this.state.currentPage} perPage={this.state.perPage} />
      </Fragment>
    )
  }
})
```
*Output*
<SBTable />
:::

*Component Property*
<SBTableProperty />
 
<!-- ## Toasts
... Coming soon. Stay tune.
## Tooltips
... Coming soon. Stay tune. -->

##
