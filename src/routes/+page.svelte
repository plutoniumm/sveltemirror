<script lang="ts">
    import CodeMirror from "$lib";
    import { html } from "@codemirror/lang-html";
    import { oneDark } from "@codemirror/theme-one-dark";
    import { onMount } from "svelte";
    import Template from "./template.html?raw";
    import type { EditorView } from "codemirror";

    let //
        value = "",
        view: EditorView,
        frame: any,
        doc = null as any;

    let props: CodeMirror["$$prop_def"] = {
        tabSize: 2,
        placeholder: null,
        lang: html(),
        theme: oneDark,
        basic: true,
        useTab: true,
        editable: true,
        lineWrapping: true,
        readonly: false,
    };

    const write = (text: any) => {
        doc.open();
        doc.write(text);
        doc.close();
    };

    const handleChange = () => write(value);
    onMount(() => {
        value = Template;
        if (!doc) doc = frame.contentWindow.document;
        write(value);
    });

    const handleMessage = ({ data }) => {
        if (data.type !== "code") return 0; // ignore if not code

        const { code } = data;
        value = code;
        write(code);
    };
</script>

<!-- message, keyup and click -->
<svelte:window
    on:message={handleMessage}
    on:keyup={handleKeyup}
    on:click={handleClick}
/>

<main class="f">
    <div class="editor">
        <CodeMirror
            bind:value
            bind:view
            class="editor"
            styles={{
                "&": {
                    fontSize: "16px",
                    height: "100%",
                    width: "100%",
                },
            }}
            {...props}
            on:change={handleChange}
        />
    </div>
    <iframe
        id="mfWHAT"
        frameborder="0"
        bind:this={frame}
        title="Editor Output"
        style="background: #fff;"
    />
</main>

<style>
    main {
        display: flex;
        height: 100vh;
        width: 100vw;
        background: #eef;
    }

    .editor,
    iframe {
        width: 50%;
        height: 100%;
    }

    @media (max-width: 768px) {
        main {
            flex-direction: column;
        }

        .editor,
        iframe {
            width: 100%;
            height: 50%;
        }
    }
</style>
