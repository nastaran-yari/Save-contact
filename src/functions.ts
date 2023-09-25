import { listDrawerElement } from "./importer";
import { contactInfoType } from "./type";



export const creatListItem = (contactInfo : contactInfoType)=> {
    const listItem = document.createElement("li");
    listItem.className = "flex flex-col list-none py-4 px-1 bg-slate-200 rounded-lg ";
    const contacteNameItem = document.createElement("h2");
    contacteNameItem.className = "text-black";
    contacteNameItem.innerText =contactInfo.name;
    const contactePhoneNumberItem = document.createElement("p");
    contactePhoneNumberItem.className = "text-slate-500";
    contactePhoneNumberItem.innerText =contactInfo.phoneNumber.toString();
  
    listItem.appendChild(contacteNameItem);
    listItem.appendChild(contactePhoneNumberItem);
   
    return listItem;
    
}

export const validatFields = (...fields : string[] ) => {
    return fields.every((field) => !!(field).toString())
}