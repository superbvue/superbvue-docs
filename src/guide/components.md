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
*SBAlert Property*
<SBAlertProperty />

<!-- ------------------------------------------------------------------------------------------------------------- -->

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
| pill | Boolean | | badges more rounded |
| class | String | | |
| href | String | | |
| variant | String |  | Set background color. `primary | secondary | success | danger | warning | info | light | dark` |


<!-- ------------------------------------------------------------------------------------------------------------- -->

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
| disabled | Boolean | false | disable button state | 
| toggle | Boolean | false | | 
| pressed | Boolean | false | gives the button the appearance of being pressed |
| block | Boolean | false |  full-width, “block buttons”  |
| pill | Boolean | false | button with the pill style appearance |
| squared | Boolean | false | button with non-rounded corners |
| active | Boolean | false | active state with active styling |
| size | String | md | Set button size. `sm | md | lg` |
| type | String | button | |
| variant | String |  | Set color on button. `primary | secondary | success | danger | warning | info | light | dark` |

<!-- ## Button group
... Coming soon. Stay tune. -->
## Card
::: details template
```vue
<template>
  <SBCard style="max-width: 20rem;" class="mb-2" imgAlt="Image" imgSrc="https://picsum.photos/600/300/?image=25" imgTop>
    <SBCardTitle textTag="h4">Some quick example text to build on the card title and make up the bulk of the card's content.</SBCardTitle>
    <SBButton variant="primary">Go somewhere</SBButton>
  </SBCard>
</template>
```
*Output*
<SBCard />

```vue
<template>
  <!-- List groups -->
  <SBCard style="max-width: 20rem;">
    <SBListgroup>
      <SBListgroupItem>Cras justo odio</SBListgroupItem>
      <SBListgroupItem>Dapibus ac facilisis in</SBListgroupItem>
      <SBListgroupItem>Vestibulum at eros</SBListgroupItem>
    </SBListgroup>
  </SBCard>
</template>
```
*Output*
<SBCardListgroups />

```vue
<template>
  <!-- Header Bordered Card -->
  <SBCard class="text-center" title="Card title" header="Primary header" headerBgVariant="primary" headerTextVariant="white">
    <SBCardTitle>Some quick example text to build on the card title and make up the bulk of the card's content.</SBCardTitle>
  </SBCard>
</template>
```
*Output*
<SBCardWithHeader />

:::

::: details jsx
```jsx
export default defineComponent({
  render() {
    return (
      <Fragment>
        <SBCard style="max-width: 20rem;" class="mb-2" imgAlt="Image" imgSrc="https://picsum.photos/600/300/?image=25" imgTop>
          <SBCardTitle textTag="h4">Some quick example text to build on the card title and make up the bulk of the card's content.</SBCardTitle>
          <SBButton variant="primary">Go somewhere</SBButton>
        </SBCard>
      </Fragment>
    )
  }
})
```
*Output*
<SBCard />

```jsx
export default defineComponent({
  render() {
    return (
      <Fragment>
        {/* List groups */}
        <SBCard style="max-width: 20rem;">
          <SBListgroup>
            <SBListgroupItem>Cras justo odio</SBListgroupItem>
            <SBListgroupItem>Dapibus ac facilisis in</SBListgroupItem>
            <SBListgroupItem>Vestibulum at eros</SBListgroupItem>
          </SBListgroup>
        </SBCard>
      </Fragment>
    )
  }
})
```
*Output*
<SBCardListgroups />

```jsx
export default defineComponent({
  render() {
    return (
      <Fragment>
        {/* Header Bordered Card */}
        <SBCard class="text-center" title="Card title" header="Primary header" headerBgVariant="primary" headerTextVariant="white">
          <SBCardTitle>Some quick example text to build on the card title and make up the bulk of the card's content.</SBCardTitle>
        </SBCard>
      </Fragment>
    )
  }
})
```

*Output*
<SBCardWithHeader />

:::
*SBCard Property*
<SBCardProperty />

*SBCardTitle Property*
<SBCardTitleProperty />

*SBCardListgroup Property*
<SBCardListgroupProperty />

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
| vertical | Boolean | | stack them | 
| pills | Boolean | | navs more rounded | 
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
| disabled | Boolean | | disable element for clickable | 
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
| showProgress | Boolean | | Displays the current progress value as a percentage | 
| showValue | Boolean | | Displays the current progress value | 
| variant | String |  | Set background color. `primary | secondary | success | danger | warning | info | light | dark` |


## Pagination

::: details template
  ```vue
  <template>
    <SBPagination v-bind:totalRows="row" v-model="state.currentPage" v-bind:perPage="state.perPage" />
  </template>
  ```

  ```js
  import { SBPagination } from 'superbvue'

  export default defineComponent({
    components: {
      SBPagination
    },
    data() {
      return {
        state: {
          items: [
            { age: 45, fistName: 'Jonhson', lastName: 'Macdonald' },
            { age: 15, fistName: 'Larsen', lastName: 'Shaw' },
            { age: 65, fistName: 'Geneva', lastName: 'Wilson' },
            { age: 35, fistName: 'Jami', lastName: 'Carney' }
          ],
          fields: ['Age', 'First Name', 'Last Name'],
          perPage: '3',
          currentPage: 1
        }
      }
    }
  })
  ```
  *Output*
  <!-- <SBTableBasic /> -->

  <br />

  *Button variant*

  ```vue
  <template>
    <!-- Basic Button variant -->
    <SBPagination v-bind:totalRows="row" v-model="state.currentPage" v-bind:perPage="state.perPage" />

    <!-- Alignment -->
    <SBPagination v-bind:totalRows="state.row" v-model="state.currentPage" v-bind:perPage="state.perPage" align="center" />
    
    <!-- Use text in props -->
    <SBPagination v-bind:totalRows="state.row" v-model="state.currentPage" prevText="Prev" lastText="Next" v-bind::perPage="state.perPage" ariaLabel="my-custon-pagination" />
  </template>

  <script>
  import { SBPagination } from 'superbvue'

  export default defineComponent({
    components: {
      SBPagination
    },
    data() {
      return {
        state: {
          rows: 100
          perPage: '3',
          currentPage: 1
        }
      }
    }
  })
  </script>
  ```

  *Output*
  <SBPaginationButtonVariant />
:::

::: details jsx
  ```jsx
  import { SBTable } from 'superbvue'

  export default defineComponent({
    data() {
      return {
        state: {
          items: [
            { age: 45, fistName: 'Jonhson', lastName: 'Macdonald' },
            { age: 15, fistName: 'Larsen', lastName: 'Shaw' },
            { age: 65, fistName: 'Geneva', lastName: 'Wilson' },
            { age: 35, fistName: 'Jami', lastName: 'Carney' }
          ],
          fields: ['Age', 'First Name', 'Last Name'],
          perPage: 3,
          currentPage: 1,
        }
      }
    },
    methods: {
      handleSetCurrentPage(event) {
        this.state.currentPage = event.target.value
      }
    },
    render() {
      return (
        <Fragment>
          <SBPagination totalRows={this.row} onChange={this.handleSetCurrentPage} modelValue={this.state.currentPage} perPage={this.state.perPage} ariaLabel="my-custon-pagination" />
        </Fragment>
      )
    }
  })
  ```
  *Output*
  <!-- <SBTableBasic /> -->

  <br />

  *Button variant*
  ```jsx
  import { SBTable } from 'superbvue'

  export default defineComponent({
    data() {
      return {
        state: {
          rows: 100
          perPage: '3',
          currentPage: 1
        }
      }
    },
    render() {
      return (
        <Fragment>
          {/* Basic Button variant */}
          <SBPagination totalRows={this.state.row} perPage={this.state.perPage} />

          {/* Alignment */}
          <SBPagination totalRows={this.state.row} perPage={this.state.perPage} align="center" />
          
          {/* Use text in props */}
          <SBPagination totalRows={this.state.row} prevText="Prev" lastText="Next" perPage={this.state.perPage} ariaLabel="my-custon-pagination" />
        </Fragment>
      )
    }
  })
  ```
  *Output*
  <SBPaginationButtonVariant />
:::

*Pagination Component Property*
<SBPaginationProperty />

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
| small | Boolean | false | When set, rendered a smaller spinner suitable for placing in buttons | 
| variant | Boolean | false | Applies one of the Bootstrap theme color variants to the component  | 
| class | String | false | |
| squared | Boolean | false | |
<!-- ## Toasts
... Coming soon. Stay tune.
## Tooltips
... Coming soon. Stay tune. -->

<!-- ------------------------------------------------------------------------------------------------------------- -->

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
          { age: 45, fistName: 'Jonhson', lastName: 'Macdonald' },
          { age: 15, fistName: 'Larsen', lastName: 'Shaw' },
          { age: 65, fistName: 'Geneva', lastName: 'Wilson' },
          { age: 35, fistName: 'Jami', lastName: 'Carney' }
        ],
        fields: ['Age', 'First Name', 'Last Name']
      }
    }
  }
})
```
*Output*
<SBTableBasic />

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
          { age: 40, fistName: 'Dickerson', lastName: 'Macdonald' },
          { age: 21, fistName: 'Larsen', rowVariant: 'primary', lastName: 'Shaw' },
          { age: 89, fistName: 'Geneva', lastName: 'Wilson' },
          { age: 38, fistName: 'Jami', lastName: 'Carney', cellVariant: { fistName: 'info' } }
        ],
        fields: ['Age', 'First', 'last']
      }
    }
  }
})
```
*Output*
<SBTableVariant />
:::

::: details jsx
```jsx
import { SBTable } from 'superbvue'

export default defineComponent({
  data() {
    return {
      state: {
        items: [
          { age: 45, fistName: 'Jonhson', lastName: 'Macdonald' },
          { age: 15, fistName: 'Larsen', lastName: 'Shaw' },
          { age: 65, fistName: 'Geneva', lastName: 'Wilson' },
          { age: 35, fistName: 'Jami', lastName: 'Carney' }
        ],
        fields: ['Age', 'First Name', 'Last Name']
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
<SBTableBasic />

<br />

*Using variants for table cells*

```jsx
import { SBTable } from 'superbvue'

export default defineComponent({
  data() {
    return {
      state: {
        items: [
          { age: 40, fistName: 'Dickerson', lastName: 'Macdonald' },
          { age: 21, fistName: 'Larsen', lastName: 'Shaw',  rowVariant: 'primary' },
          { age: 89, fistName: 'Geneva', lastName: 'Wilson' },
          { age: 38, fistName: 'Jami', lastName: 'Carney', cellVariant: { fistName: 'info' } }
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
<SBTableVariant />
:::

*Table Component Property*
<SBTableProperty />
 
<!-- ## Toasts
... Coming soon. Stay tune.
## Tooltips
... Coming soon. Stay tune. -->


##
