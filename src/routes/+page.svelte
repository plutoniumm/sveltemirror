<script lang="ts">
    import CodeMirror, { Renderer } from "$lib";
    import { html } from "@codemirror/lang-html";
    import { onMount } from "svelte";
    import Template from "./template.html?raw";
    import type { EditorView } from "codemirror";
    import { dracula } from "thememirror";

    let //
        value = "",
        view: EditorView;

    let props: CodeMirror["$$prop_def"] = {
        tabSize: 2,
        placeholder: null,
        lang: html(),
        theme: dracula,
        basic: true,
        useTab: true,
        editable: true,
        lineWrapping: true,
        readonly: false,
    };

    const handleMessage = ({ data }) => {
        if (data.type !== "code") return 0; // ignore if not code

        const { code } = data;
        value = code;
    };

    onMount(() => (value = Template));
</script>

<!-- message, keyup and click -->
<svelte:window on:message={handleMessage} />

<svelte:head>
    <style>
        .cm-scroller {
            overflow: auto;
            min-height: 100vh;
        }
    </style>
</svelte:head>

<main class="f">
    <div class="editor">
        <CodeMirror
            bind:value
            bind:view
            styles={{
                "&": {
                    fontSize: "16px",
                    height: "100%",
                    width: "100%",
                },
            }}
            delay={500}
            {...props}
        />
    </div>
    <div class="frame">
        <Renderer
            bind:value
            preprocess={(value) => {
                const prefix = `<div class='p20 m10'>
                    You can add modifiers also! Cursor At:
                    ${view.state.selection.main.head}
                </div>`;
                return (value = prefix + value);
            }}
        />
    </div>
</main>

<style>
    main {
        display: flex;
        height: 100vh;
        width: 100vw;
        background: #eef;
    }

    .editor,
    .frame {
        width: 50%;
        height: 100%;
    }

    @media (max-width: 768px) {
        main {
            flex-direction: column;
        }

        .editor,
        .frame {
            width: 100%;
            height: 50%;
        }
    }
</style>
