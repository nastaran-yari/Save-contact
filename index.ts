type contactType = {
  id: string;
  name: string;
  phoneNumber: string;
  storage: "SIM" | "Device";
};

type contactsListType = contactType[];

const contactList: contactsListType = [];

const nameInput = document.querySelector<HTMLInputElement>("#name");
const phoneNumberInput =
  document.querySelector<HTMLInputElement>("#phoneNumber");
const SIMstorageInput = document.querySelector<HTMLInputElement>("#SIMstorage");
const deviceStorageInput =
  document.querySelector<HTMLInputElement>("#deviceStorage");

const saveButton = document.querySelector<HTMLButtonElement>("#saveButton");
const showButton = document.querySelector<HTMLButtonElement>("#showButton");
const closeDrawerButton =
  document.querySelector<HTMLButtonElement>("#closeDrawerButton");

const drawerList = document.querySelector<HTMLInputElement>("#drawerList");

const listDrawerElement =
  document.querySelector<HTMLUListElement>("#listInDrawe");

showButton?.addEventListener("click", () => {
  drawerList?.classList.remove("bottom-[-100%]");
  drawerList?.classList.add("bottom-[0%]");
});

closeDrawerButton?.addEventListener("click", () => {
  drawerList?.classList.add("bottom-[-100%]");
  drawerList?.classList.remove("bottom-[0%]");
});

saveButton?.addEventListener("click", () => {
  const newcontact: contactType = {
    id: crypto.randomUUID(),
    name: nameInput?.value ?? "",
    phoneNumber: phoneNumberInput?.value ?? "",
    storage: deviceStorageInput?.checked ? "Device" : "SIM",
  };
  console.log(contactList);
  contactList.push(newcontact);

  const listItem = document.createElement("li");
  listItem.className = "flex flex-col list-none py-4 px-1 bg-slate-200 rounded-lg ";
  const contacteNameItem = document.createElement("h2");
  contacteNameItem.className = "text-black";
  contacteNameItem.innerText = newcontact.name;
  const contactePhoneNumberItem = document.createElement("p");
  contactePhoneNumberItem.className = "text-slate-500";
  contactePhoneNumberItem.innerText = newcontact.phoneNumber;

  listItem.appendChild(contacteNameItem);
  listItem.appendChild(contactePhoneNumberItem);

  listDrawerElement?.appendChild(listItem);

  /*const listItem = document.createElement("li");
  listItem.className = "flex flex-col list-none py-4 px-1 ";
  const contactNameElement = document.createElement("h2");
  contactNameElement.className = "text-black";
  contactNameElement.innerText = newcontact.name;
  const contactPhoneNumberElement = document.createElement("p");
  contactPhoneNumberElement.className = "text-slate-500";
  contactPhoneNumberElement.innerText = newcontact.phoneNumber.toString();

  listItem.appendChild(contactNameElement);
  listItem.appendChild(contactPhoneNumberElement);

  listDrawerElement?.appendChild(listItem);*/
});
