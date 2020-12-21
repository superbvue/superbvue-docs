# Form

## Form Control
... Coming soon. Stay tune.
## Form Input

::: details template
``` html
<template>
  <SBFormInput v-model="state.text" type="text" />

  <!-- Range  -->
  <SBFormInput v-model="state.rangeValue" type="range" min="0" max="50" value="10" />
</template>
```

```js
import { SBFormInput } from 'superbvue'

export default defineComponent({
  components: {
    SBFormInput
  },
  setup() {
    const state = reactive({
      text: '',
      rangeValue
    })

    return {
      state
    }
  }
})
```
*Output*
<SBFormInput />
:::

::: details jsx
```jsx
import { SBFormInput } from 'superbvue'

export default defineComponent({
  setup() {
    const state = reactive({
      text: '',
      rangeValue: ''
    })

    return {
      state
    }
  },
  methods: {
    handleSetText(event) {
      this.state.text = event.target.value
    }
  },
  render() {
    return (
      <div>
        <SBFormInput type="text" value={this.state.text} onInput={this.handleSetText} />
        
        // Range
        <SBFormInput value={this.state.rangeValue} type="range" min="0" max="50" value="10" onInput={this.handleSetValue} />
      </div>
    )
  }
})
```
*Output*
<SBFormInput />
:::

| Property | Type | Default | Description |
| ------------- |:-------------: | :-----: | :-------------: |
| placeholder | String | | |
| modelValue | String | |  |
| v-model | String | |  |
| type | String | | type of input. `text | password | email| number| url| tel| search| range| color| date| time| datetime |datetime-local| month| week` |
| value | String | | |
| class | String | | |
| min | String | | |
| max | String | | |
| step | String | | |
| id | String | | |
| disable | Boolean | | |
| size | String | | |
| variant | String |  | Set background color. `primary | secondary | success | danger | warning | info | light | dark` |

## Form Group
... Coming soon. Stay tune.
## Form Select

::: details template
``` html
<template>
  <SBFormSelect v-model="state.selected" :options="state.options" />

</template>
```

```js
import { SBFormSelect } from 'superbvue'

export default defineComponent({
  components: {
    SBFormSelect
  },
  setup() {
    const state = reactive({
      selected: '',
      options: [
        { text: 'Toggle', value: 'first' },
        { text: 'toggle other', value: 'second' },
        { text: 'I am  Disabled', value: 'third', disabled: true },
        { text: 'Another text with radio', value: { fourth: 4 } }
      ],
    })

    return {
      state
    }
  }
})
```
*Output*
<SBFormSelect />
:::

::: details jsx
```jsx
import { SBFormSelect } from 'superbvue'

export default defineComponent({
  setup() {
    const state = reactive({
      selected: '',
      options: [
        { text: 'Toggle', value: 'first' },
        { text: 'toggle other', value: 'second' },
        { text: 'I am  Disabled', value: 'third', disabled: true },
        { text: 'Another text with radio', value: { fourth: 4 } }
      ],
    })

    return {
      state
    }
  },
  methods: {
    handleSetText(event) {
      this.state.text = event.target.value
    }
  },
  render() {
    return (
      <Fragment>
        <SBFormSelect options={this.state.options} onChange={this.handleSetName} />
      </Fragment>
    )
  }
})
```
*Output*
<SBFormSelect />
:::

| Property | Type | Default | Description |
| ------------- |:-------------: | :-----: | :-------------: |
| placeholder | String | | |
| modelValue | String | |  |
| v-model | String | |  |
| type | String | | type of input. `text | password | email| number| url| tel| search| range| color| date| time| datetime |datetime-local| month| week` |
| value | String | | |
| class | String | | |
| min | String | | |
| max | String | | |
| step | String | | |
| id | String | | |
| disable | Boolean | | |
| size | String | | |
| onChange | Function | | |
| variant | String |  | Set background color. `primary | secondary | success | danger | warning | info | light | dark` |

## Form Checks & radios
... Coming soon. Stay tune.
## Form Range
... Coming soon. Stay tune.
## Form Control
... Coming soon. Stay tune.
