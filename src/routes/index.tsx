import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>We Who Care Site</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "We Who Care",
  meta: [
    {
      name: "description",
      content: "We Who Care site description",
    },
  ],
};
