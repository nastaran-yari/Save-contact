export type contactType = {
    id: string;
    name: string;
    phoneNumber: string;
    storage: "SIM" | "Device";
  };
  
export  type contactsListType = contactType[];

export type contactInfoType = {
    name : string,
    phoneNumber : string | number
}