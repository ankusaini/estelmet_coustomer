import { Product } from './product';
//personal detail
export interface User {
    id: string;
    firstName: string;
    lastName: string;
    mobile: string;
    email: string;
    password: string;
    userRole: UserRole;
    status: Status;
    privileges: string[];
    userDetail: UserDetail;
    userGroup: UserGroup[];
}
//comPANY DETAIL
export interface UserDetail {
    userDetailId: string;
    userProductPreference: Product[];
    keyPerson: KeyPerson[];
    annualTurnover: AnnualTurnover[];
    companyName: string;
    address1: string;
    address2: string;
    gst: string;
    otp: string;
    numberOfEmployees: string;
    country: string;
    state: string;
    city: string;
    pinCode: string;
    mobile1: string;
    mobile2: string;
    emailBusiness: string;
    creditLimit: string;
    currentOutstanding: string;
    daysPayableOutstanding: string;
}

export interface AnnualTurnover {
    annualTurnoverId: string;
    year: string;
    turnover: string;
}
//KREY PERSOM
export interface KeyPerson {
    keyPersonId: string;
    name: string;
    designation: string;
    mobile1: string;
    mobile2: string;
    email1: string;
    email2: string;
}
//TRADE DETAILS
export interface UserProductPreference {
    userProductPreferenceId: string;
    productType: string;
    productCategory: string;
    productShape: string;
    productClass: string;
    thicknessRange: string;
    temperRange: string;
    widthRange: string;
    lengthRange: string;
    monthlyRequirement: string;
}

export interface UserGroup {
    userGroupId: string;
    user: User[];
    userRole: UserRole;
    status: Status;
    userGroupName: string;
    productType: string;
    productCategory: string;
    minThickness: string;
    maxThickness: string;
    minWidth: string;
    maxWidth: string;
    minTemper: string;
    maxTemper: string;
    userGroupNoOfUser: string;
    userGroupDate: string;
    alias: string;
    createdDate: string;
}

export enum Status {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
    ONHOLD = 'ONHOLD'
}

export enum UserRole {
    ADMIN = 'ADMIN',
    SUPER_ADMIN = 'SUPER_ADMIN',
    AUTH_ADMIN = 'AUTH_ADMIN',
    EMPLOYEE = 'EMPLOYEE',
    CUSTOMER = 'CUSTOMER',
    SUPPLIER = 'SUPPLIER',
    AGENT = 'AGENT',
    TRANSPORTER = 'TRANSPORTER',
    CONTRACTOR = 'CONTRACTOR'
}

export class ProductRequestParam {
    status: Status;
    productStage: string;
    pageNumber: number;
    pageSize: number;
    thicknessMin: number;
    thicknessMax: number;
    widthMin: number;
    widthMax: number;
    lengthMin : number;
    lengthMax: number;
    pcategory: string;
    pclass: string;
    pshape: string;
}
