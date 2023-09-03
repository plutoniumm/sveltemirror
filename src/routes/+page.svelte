<script lang="ts">
    import CodeMirror from "$lib";
    import { javascript } from "@codemirror/lang-javascript";
    import { oneDark } from "@codemirror/theme-one-dark";

    let value = "";

    let props: CodeMirror["$$prop_def"] = {
        basic: true,
        useTab: true,
        editable: true,
        lineWrapping: false,
        readonly: false,
        tabSize: 2,
        placeholder: null,
        lang: javascript({ typescript: true }),
        theme: oneDark,
    };
</script>

<div class="demo">
    <CodeMirror bind:value class="editor" {...props} />
</div>

<style>
    .demo {
        position: relative;
        height: 100%;
        display: grid;
        grid-template-rows: 1fr auto;
        overflow: hidden;
    }

    :global(.editor) {
        overflow: hidden;
    }
</style>
