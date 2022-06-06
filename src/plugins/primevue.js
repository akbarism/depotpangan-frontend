// kumpulan komponen dari pime vue
// di define secara global
// langsung pake di komponen

import Editor from "primevue/editor";
import Dialog from "primevue/dialog";
import Toolbar from "primevue/toolbar";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import Card from "primevue/card";
import Carousel from "primevue/carousel";
import Galleria from "primevue/galleria";
import Divider from "primevue/divider";
import Skeleton from "primevue/skeleton";
export const primevueComponent = (app) => {
  app
    .component("Skeleton", Skeleton)
    .component("Divider", Divider)
    .component("Editor", Editor)
    .component("Dialog", Dialog)
    .component("InputText", InputText)
    .component("InputNumber", InputNumber)
    .component("Button", Button)
    .component("Card", Card)
    .component("Carousel", Carousel)
    .component("Galleria", Galleria)
    .component("Dropdown", Dropdown)
    .component("Toolbar", Toolbar);
};
