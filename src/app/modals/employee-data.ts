export interface IEmployeeRecord {
    id: number;
    name: string;
    phone: string;
    city: string;
    address: IAddress;
}

export interface IAddress {
    city: string;
    address_line1: string;
    address_line2: string;
    postal_code: string;
}

export interface IEmployeeData {
    data: Array<IEmployeeRecord>;
}
