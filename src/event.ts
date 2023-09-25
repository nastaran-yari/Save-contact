import {drawerList,nameInput,phoneNumberInput,deviceStorageInput,listDrawerElement} from "./importer.js"
import {contactInfoType, contactType} from "./type"
import { contactList } from "./state.js";
import { creatListItem } from "./functions.js";
import { validatFields } from "./functions.js";

export const handleDrawerShow =  () => {
    drawerList?.classList.remove("bottom-[-100%]");
    drawerList?.classList.add("bottom-[0%]");
}

export const handelDrawerClose =  () => {
    drawerList?.classList.add("bottom-[-100%]");
    drawerList?.classList.remove("bottom-[0%]");
}

const validateCreatContact = (contactInfo : contactInfoType) => {
    if (!validatFields(contactInfo.name , contactInfo.phoneNumber + '')){

        alert ("fill all fields");
    }

}

export const handelCreatContact =  () => {
 
    if (validatFields(nameInput!.value , phoneNumberInput!.value)){
        return console.log("error");
    }

    const newcontact: contactType = {
      id: crypto.randomUUID(),
      name: nameInput?.value ?? "",
      phoneNumber: phoneNumberInput?.value ?? "",
      storage: deviceStorageInput?.checked ? "Device" : "SIM",
    };
    console.log(contactList);
    contactList.push(newcontact);
  
    const listItem = creatListItem({
        name : newcontact.name,
        phoneNumber : newcontact.phoneNumber
    })


    listDrawerElement?.appendChild(listItem);
}