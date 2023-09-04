<script>
  import CodeMirror, { Renderer } from "$lib";
  import { html } from "@codemirror/lang-html";
  import { oneDark } from "@codemirror/theme-one-dark";

  let demo = {
    html: `<h1> Hi there! </h1>`,
    style: {
      "&": {
        width: "500px",
        maxWidth: "100%",
        height: "100px",
      },
    },
  };
</script>

<svelte:head>
  <style>
    body {
      background: #eef;
    }
  </style>
</svelte:head>

<main class="mx-a" style="width: min(100%, 600px);">
  <h1>Sveltemirror 📚</h1>

  <p>
    This is a collection of Svelte components that use
    <a href="https://codemirror.net/">CodeMirror</a> to provide code editing functionality.
  </p>

  <h2>Getting Started</h2>

  <p>To get started, install the package from npm:</p>

  <pre><code class="language-bash">npm install sveltemirror</code></pre>

  <h2>Usage</h2>
  <h3>Basic</h3>
  The most basic usage for just the editor is as follows:

  <!-- editable={false} -->
  <CodeMirror
    readonly={true}
    class="rx10 m10"
    theme={oneDark}
    value={`<script` +
      `>
    import CodeMirror from "sveltemirror";
    import { html } from "@codemirror/lang-html";

    let value = "${demo.html}";
</scr` +
      `ipt>

<CodeMirror bind:value lang={html()} />`}
  />

  It should create an editor that looks like this:

  <CodeMirror lang={html()} value={demo.html} />

  <h3>Styling</h3>

  <p>
    The editor can accept props to be passed as styles to the editor and also
    custom themes
  </p>

  <CodeMirror
    readonly={true}
    class="rx10 m10"
    theme={oneDark}
    value={`<script` +
      `>
    import CodeMirror from "sveltemirror";
    import { html } from "@codemirror/lang-html";
    import { oneDark } from "@codemirror/theme-one-dark";

    let value = "${demo.html}";
</scr` +
      `ipt>

  <CodeMirror
    bind:value
    lang={html()}
    theme={oneDark}
    styles={${JSON.stringify(demo.style, null, 2)
      .split("\n")
      .map((line) => "\t" + line)
      .join("\n")
      .trim()}}
  />`}
  />

  this will create an editor that looks like this:
  <CodeMirror
    lang={html()}
    theme={oneDark}
    styles={demo.style}
    value={demo.html}
  />

  <h2>Renderer</h2>
  <p>
    For ease of use a barebones iframe renderer is provided. The renderer
    accepts an optional string preprocess function that can be used to modify
    the code before it is rendered.
  </p>

  <CodeMirror
    readonly={true}
    class="rx10 m10"
    theme={oneDark}
    value={`<script` +
      `>
    import CodeMirror, { Renderer } from "sveltemirror";
    import { html } from "@codemirror/lang-html";
    import { oneDark } from "@codemirror/theme-one-dark";

    let value = "${demo.html}";
  </scr` +
      `ipt>

    <div style="display:flex;"
      <CodeMirror
        bind:value
        theme={oneDark}
        styles={{
          "&": {
            height: "150px",
          },
        }}
        lang={html()}
      />

      <Renderer
        bind:value
        preprocess={(v) => "Hiiiii" + v}
      />
    </div>`}
  />

  <div style="display:flex;">
    <CodeMirror
      lang={html()}
      theme={oneDark}
      value={demo.html}
      styles={{
        "&": {
          height: "150px",
        },
      }}
    />
    <Renderer
      lang={html()}
      value={demo.html}
      preprocess={(v) => "Hiiiii" + v}
    />
  </div>

  <p><br /></p>
  <p><br /></p>
  <p><br /></p>
</main>

<style>
  pre {
    background: #fff;
    padding: 2px 5px;
    border-radius: 5px;
  }
</style>
