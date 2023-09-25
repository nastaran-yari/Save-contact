import {saveButton ,showButton,closeDrawerButton ,} from "./src/importer.js";
import { handleDrawerShow ,handelDrawerClose , handelCreatContact} from "./src/event.js";

showButton?.addEventListener("click", handleDrawerShow);
closeDrawerButton?.addEventListener("click", handelDrawerClose);
saveButton?.addEventListener("click", handelCreatContact);
