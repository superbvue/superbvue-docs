# Layout and Grid System

## Container

::: details template
``` html
<template>
  <SBContainer>
    <!-- Content here -->
  </SBContainer>

  <SBContainer fluid>
    <!-- Content here -->
  </SBContainer>
</template>
```

```js
import { SBContainer } from 'superbvue'

export default defineComponent({
  components: {
    SBContainer
  }
})
```

*Output*
<SBContainer />

:::


::: details jsx
```jsx
import { SBContainer } from 'superbvue'

export default defineComponent({
  render() {
    return (
      <Fragment>
        <SBContainer>
          //  Content here
        </SBContainer>

        <SBContainer fluid>
          //  Content here
        </SBContainer>
      </Fragment>
    )
  }
})
```
*Output*
<SBContainer />

:::

| Property | Type | Default | Description |
| ------------- |:-------------: | :-----: | :-------------: |
| fluid | String | | full width container |
| tag | String | |  |
| widths | String | | specify a class that is 100% wide until the specified breakpoint is reached `sm | md | lg | xl | xxl` |
| class | String | |  |
| style | String | |  |

## Row

::: details template
``` html
<template>
  <SBContainer widths="sm">
    <SBRow>
    <SBRow>
      <SBCol>
        1 of 3
      </SBCol>
      <SBCol>
        2 of 3
      </SBCol>
      <SBCol>
        3 of 3
      </SBCol>
    </SBRow>
  </SBContainer>
</template>
```

```js
import { SBContainer, SBRow, SBCol } from 'superbvue'

export default defineComponent({
  components: {
    SBContainer,
    SBRow,
    SBCol
  }
})
```

*Output*
<SBRow />

:::

::: details jsx
```jsx
import { SBContainer, SBRow, SBCol } from 'superbvue'

export default defineComponent({
  render() {
    return (
      <Fragment>
         <SBContainer>
          <SBRow>
            <SBCol>
              1 of 2
            </SBCol>
            <SBCol>
              2 of 2
            </SBCol>
          </SBRow>
          <SBRow>
            <SBCol>
              1 of 3
            </SBCol>
            <SBCol>
              2 of 3
            </SBCol>
            <SBCol>
              3 of 3
            </SBCol>
          </SBRow>
        </SBContainer>
      </Fragment>
    )
  }
})
```

*Output*
<SBRow />

:::

| Property | Type | Default | Description |
| ------------- |:-------------: | :-----: | :-------------: |
| cols | String | | Setting one column width |
| tag | String | |  |
| align | String | | vertical alignment of all grid cells in a row `start | center | end | baseline | stretch` |
| justify | String | | horizontal alignment `start | center | end | baseline | stretch | around | between | evenly` |
| class | String | |  |
| style | String | |  |

## Column

::: details template
``` html
<template>
  <SBContainer widths="sm">
    <SBRow>
      <SBCol>
        1 of 2
      </SBCol>
      <SBCol cols="5">
        2 of 2
      </SBCol>
    </SBRow>
    <SBRow>
      <SBCol>
        1 of 3
      </SBCol>
      <SBCol cols="6">
        2 of 3
      </SBCol>
      <SBCol>
        3 of 3
      </SBCol>
    </SBRow>
  </SBContainer>
</template>
```

```js
import { SBContainer, SBRow, SBCol } from 'superbvue'

export default defineComponent({
  components: {
    SBContainer,
    SBRow,
    SBCol
  }
})
```
:::

::: details jsx
```jsx
import { SBContainer, SBRow, SBCol } from 'superbvue'

export default defineComponent({
  render() {
    return (
      <Fragment>
         <SBContainer widths="sm">
          <SBRow>
            <SBCol>
              1 of 2
            </SBCol>
            <SBCol cols="5">
              2 of 2
            </SBCol>
          </SBRow>
          <SBRow>
            <SBCol>
              1 of 3
            </SBCol>
            <SBCol cols="6">
              2 of 3
            </SBCol>
            <SBCol>
              3 of 3
            </SBCol>
          </SBRow>
        </SBContainer>
      </Fragment>
    )
  }
})
```
:::

| Property | Type | Default | Description |
| ------------- |:-------------: | :-----: | :-------------: |
| cols | String | | setting one column width |
| sm | Boolean | | columns the grid cell spans for sm and up breakpoints |
| md | Boolean | | columns the grid cell spans for md and up breakpoints |
| lg | Boolean | | columns the grid cell spans for lg and up breakpoints |
| xl | Boolean | | columns the grid cell spans for xl and up breakpoints |
| alignSelf | String | | vertical alignment of individual grid cells in a row `start | center | end | baseline | stretch` |
| justify | String | | horizontal alignment `start | center | end | baseline | stretch | around | between | evenly` |
| order | String | | order classes `0 | 1 | 2 | 3 | 4 | 5 | first | last` |
| orderSmall | String | | order classes sm `0 | 1 | 2 | 3 | 4 | 5 | first | last` |
| orderMiddle | String | | order classes md `0 | 1 | 2 | 3 | 4 | 5 | first | last` |
| orderLarge | String | | order classes lg `0 | 1 | 2 | 3 | 4 | 5 | first | last` |
| offset | String | | offset classes `0 | 1 | 2 | 3 | 4 | 5 | first | last` |
| offsetSmall | String | | offset classes sm `0 | 1 | 2 | 3 | 4 | 5 | first | last` |
| offsetMiddle | String | | offset classes md `0 | 1 | 2 | 3 | 4 | 5 | first | last` |
| offsetLarge | String | | offset classes lg `0 | 1 | 2 | 3 | 4 | 5 | first | last` |
| class | String | |  |
| style | String | |  |

##