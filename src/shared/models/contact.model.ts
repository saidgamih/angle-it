export default class Contact {
    id: string|null;
    name: string|null;
    phone: string|null;
    email: string|null;

    constructor(id: string|null, name: string|null, phone: string|null, email:string|null) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
    }

    static createFromObject(contact: any) {
        return new Contact(contact.id, contact.name, contact.phone, contact.email);
    }
}