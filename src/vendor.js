import "bootstrap";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import {faCheck} from "@fortawesome/free-solid-svg-icons/faCheck";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";

library.add(faPlus);
library.add(faCheck);
library.add(faTimes);
dom.watch();