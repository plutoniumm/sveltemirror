<script lang="ts">
  import { afterUpdate, onMount } from "svelte";

  export let value: string;
  export let preprocess: (value: string) => string = (v) => v;

  let //
    doc: any,
    frame: any;

  const write = () => {
    doc.open();
    doc.write(preprocess(value));
    doc.close();
  };

  afterUpdate(write);
  onMount(() => {
    if (!doc) doc = frame.contentWindow.document;
    setTimeout(write, 100);
  });
</script>

<iframe frameborder="0" bind:this={frame} title="Editor Output" />

<style>
  iframe {
    width: 100%;
    height: 100%;
    background: #fff;
  }
</style>
