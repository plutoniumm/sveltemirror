<script lang="ts">
    import CodeMirror from "$lib";
    import { html } from "@codemirror/lang-html";
    import { oneDark } from "@codemirror/theme-one-dark";
    import { onMount } from "svelte";
    import Template from "./template.html?raw";
    import { base } from "$app/paths";

    let //
        value = "",
        old = "",
        doc = null as any;

    let props: CodeMirror["$$prop_def"] = {
        basic: true,
        useTab: true,
        editable: true,
        lineWrapping: false,
        readonly: false,
        tabSize: 2,
        placeholder: null,
        lang: html(),
        theme: oneDark,
    };

    const write = (text: any) => {
        doc.open();
        doc.write(text);
        doc.close();
    };

    const handleChange = () => {
        const current = value;
        if (old === current) return 0;

        old = current;
        write(current);
    };

    onMount(() => {
        value = Template;
        if (!doc)
            doc = document.getElementById("mfWHAT").contentWindow.document;
        write(value);
    });

    const handleMessage = ({ data }) => {
        if (data.type !== "code") return 0; // ignore if not code

        const { code } = data;
        value = code;
        write(code);
    };
</script>

<svelte:window on:message={handleMessage} />

<main class="f">
    <div class="editor">
        <CodeMirror
            bind:value
            class="editor"
            styles={{
                "&": {
                    fontSize: "18px",
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
