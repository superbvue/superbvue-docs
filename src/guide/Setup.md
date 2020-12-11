# Installation

``` js
npm install superbvue --save
// or
yarn add superbvue 
```


## Usage
- This is the recommended way if your application uses vue-cli or has a webpack based build with vue-loader configured.
- Then import the component you need and registering it so that you'll be able to utilize the component in your application.

``` js
import { createApp } from 'vue'
import { SBButton } from 'superbvue'

const app = createApp(App)

app.component('SBButton', SBButton)
```
```html
<SBButton></SBButton>
```

##
