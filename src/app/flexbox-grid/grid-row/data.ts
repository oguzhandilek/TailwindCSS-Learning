export const rowClass = [
  { class: "row-span-<number>", styles: "grid-row: span <number> / span <number>;" },
  { class: "row-span-full", styles: "grid-row: 1 / -1;" },
  { class: "row-span-(<custom-property>)", styles: "grid-row: span var(<custom-property>) / span var(<custom-property>);" },
  { class: "row-span-[<value>]", styles: "grid-row: span <value> / span <value>;" },

  { class: "row-start-<number>", styles: "grid-row-start: <number>;" },
  { class: "-row-start-<number>", styles: "grid-row-start: calc(<number> * -1);" },
  { class: "row-start-auto", styles: "grid-row-start: auto;" },
  { class: "row-start-(<custom-property>)", styles: "grid-row-start: var(<custom-property>);" },
  { class: "row-start-[<value>]", styles: "grid-row-start: <value>;" },

  { class: "row-end-<number>", styles: "grid-row-end: <number>;" },
  { class: "-row-end-<number>", styles: "grid-row-end: calc(<number> * -1);" },
  { class: "row-end-auto", styles: "grid-row-end: auto;" },
  { class: "row-end-(<custom-property>)", styles: "grid-row-end: var(<custom-property>);" },
  { class: "row-end-[<value>]", styles: "grid-row-end: <value>;" },

  { class: "row-auto", styles: "grid-row: auto;" },
  { class: "row-<number>", styles: "grid-row: <number>;" },
  { class: "-row-<number>", styles: "grid-row: calc(<number> * -1);" },
  { class: "row-(<custom-property>)", styles: "grid-row: var(<custom-property>);" },
  { class: "row-[<value>]", styles: "grid-row: <value>;" }
];
