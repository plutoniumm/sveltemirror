<div align="center">
<img src="./static/logo.svg" width="200" height="200" alt="sveltemirror logo" />
<h1>sveltemirror</h1>

A svelte wrapper for [CodeMirror 6](https://codemirror.net/6/)

</div>

## Installation
```bash
npm install sveltemirror
```

## Usage

To use `sveltemirror`, you need to import the package and use it as any `Svelte` component. For more see [docs](https://plutoniumm.github.io/sveltemirror/docs).

```svelte
<script lang="ts">
    import CodeMirror from "sveltemirror";
    import { javascript } from "@codemirror/lang-javascript";

    let value = "";
</script>

<CodeMirror bind:value lang={javascript()} />
```

> Note: It debounces and checks for old vs new automatically. There is no need to repeat that logic in your code

## Properties

| Property      | Type              | Description                                                          | Default value |
| ------------- | ----------------- | -------------------------------------------------------------------- | ------------- |
| `value`       | `string`          | The value that will be displayed and edited in the CodeMirror editor | `""`          |
| `view`       | `EditorView`          | Codemirror view instance | `""`          |
| `basic`       | `boolean`         | Whether to use CodeMirror `basicSetup` extensions.                   | `true`        |
| `lang`        | `LanguageSupport` | The language extension that will parse and highlight the value.      | `undefined`   |
| `theme`       | `Extension`       | The theme extension to customize the appearence of the editor.       | `undefined`   |
| `extensions`  | `Extension[]`     | Additional extensions to inject in the editor.                       | `[]`          |
| `useTab`      | `boolean`         | Whether to use the `Tab` shortcut to handle indentation.             | `true`        |
| `tabSize`     | `number`          | The number of space of an indentation level.                         | `2`           |
| `editable`    | `boolean`         | Whether to make the editor editable or not.                          | `true`        |
| `readonly`    | `boolean`         | Whether to make the editor readonly or not.                          | `false`       |
| `placeholder` | `string`          | A placeholder to include when value is empty.                        | `undefined`   |
| `styles`      | `ThemeSpec`       | In-place theme configuration. _See exemple below_.                   | `undefined`   |
| `delay`      | `number`          | The delay in ms before the `change` event is triggered. i.e the debounce duration.                   | `300`   |

## Events

| Event    | Type     | Description                   |
| -------- | -------- | ----------------------------- |
| `change` | `string` | Trigger when the code changes |

## Usage with vite/svelte-kit
If you try to use this component with `vite` or `svelte-kit`, you have to disable dependency optimization for `codemirror` and all its extensions.

```javascript
// vite.config.js
const config = {
    //...
    optimizeDeps: {
        exclude: ["codemirror", "@codemirror/language-javascript" /* ... */],
    },
    //...
}
```

## License

[MIT](LICENSE)
