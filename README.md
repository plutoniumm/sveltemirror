# sveltemirror

[![License](https://img.shields.io/badge/license-MIT-green.svg)](http://opensource.org/licenses/MIT)
[![NPM version](https://img.shields.io/npm/v/sveltemirror.svg?style=flat-square)](https://npmjs.org/package/sveltemirror)
[![NPM download](https://img.shields.io/npm/dm/sveltemirror.svg?style=flat-square)](https://npmjs.org/package/sveltemirror)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

A svelte component to create a [CodeMirror 6](https://codemirror.net/6/) editor.

- It debounces and checks for old vs new automatically.

## Installation

```bash
npm install sveltemirror
```

## Usage

To use `sveltemirror`, you need to import the package and use it as any `Svelte` component.

```svelte
<script lang="ts">
    import CodeMirror from "sveltemirror";
    import { javascript } from "@codemirror/lang-javascript";

    let value = "";
</script>

<CodeMirror bind:value lang={javascript()} />
```

## Properties

| Property      | Type              | Description                                                          | Default value |
| ------------- | ----------------- | -------------------------------------------------------------------- | ------------- |
| `value`       | `string`          | The value that will be displayed and edited in the CodeMirror editor | `""`          |
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

## Events

| Event    | Type     | Description                   |
| -------- | -------- | ----------------------------- |
| `change` | `string` | Trigger when the code changes |

## Usage with vite / svelte-kit

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

## Exemples

### Basic usage

```svelte
<script lang="ts">
    import CodeMirror from "sveltemirror";
    import { javascript } from "@codemirror/lang-javascript";

    let value = "";
</script>

<CodeMirror bind:value lang={javascript()} />
```

### Custom theme

```svelte
<script lang="ts">
    import CodeMirror from "sveltemirror";
    import { javascript } from "@codemirror/lang-javascript";
    import { oneDark } from "@codemirror/theme-one-dark";

    let value = "";
</script>

<CodeMirror bind:value lang={javascript()} theme={oneDark} />
```

### Custom styles

```svelte
<script lang="ts">
    import CodeMirror from "sveltemirror";
    import { javascript } from "@codemirror/lang-javascript";

    let value = "";
</script>

<CodeMirror
    bind:value
    lang={javascript()}
    styles={{
        "&": {
            width: "500px",
            maxWidth: "100%",
            height: "50rem",
        },
    }}
/>
```

## License

[MIT](LICENSE)
