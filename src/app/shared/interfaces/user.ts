import { Product } from './product';
//personal detail
// export interface User {
//     id: string;
//     firstName: string;
//     lastName: string;
//     mobile: string;
//     emailId: string;
//     password: string;
//     userRole: UserRole;
//     status: Status;
//     privileges: string[];
//     userDetail: UserDetail;
//     userGroup: UserGroup[];
// }

export interface UserDetail {
    id?: String;
    username?: string;
    userDetailId?: string;
    firstName?: string;
    lastName?: string;
    mobile?: string;
    emailId?: string;
    userRole?: UserRole;
    password?: string;
    image?: string;
    status?: Status;
    roles?: string[];
    privileges?: string[];
    businessDetails?: BusinessDetails[];
    userGroup?: UserGroup[];
    userProductPreference?: UserProductPreference[];
    keyPerson?: KeyPerson[];
    annualTurnover?: AnnualTurnover[];
}

//comPANY DETAIL
// export interface UserDetail {
//     userDetailId: string;
//     userProductPreference: Product[];
//     keyPerson: KeyPerson[];
//     annualTurnover: AnnualTurnover[];
//     companyName: string;
//     address1: string;
//     address2: string;
//     gst: string;
//     otp: string;
//     numberOfEmployees: string;
//     country: string;
//     state: string;
//     city: string;
//     pinCode: string;
//     mobile1: string;
//     mobile2: string;
//     emailBusiness: string;
//     creditLimit: string;
//     currentOutstanding: string;
//     daysPayableOutstanding: string;
// }

export interface BusinessDetails {
    businessDetailId?: string;
    companyName?: string;
    address1?: string;
    address2?: string;
    gst?: string;
    otp?: string;
    numberOfEmployees?: string;
    country?: string;
    state?: string;
    city?: string;
    pinCode?: string;
    mobile?: string;
    landline?: string;
    businessEmail?: string;
    creditLimit?: string;
    currentOutstanding?: string;
    daysPayableOutstanding?: string;
}

export interface AnnualTurnover {
    annualTurnoverId?: string;
    year?: string;
    turnover?: string;

}
//KREY PERSOM
export interface KeyPerson {
    keyPersonId?: string;
    name?: string;
    designation?: string;
    mobile1?: string;
    mobile2?: string;
    email1?: string;
    email2?: string;

}
//TRADE DETAILS
export interface UserProductPreference {
    userProductPreferenceId?: string;
    productType?: string;
    productCategory?: string;
    productShape?: string;
    productClass?: string;
    temperMin?: string;
    temperMax?: string;
    hardnessMin?: string;
    hardnessMax?: string;
    status?: Status;
    productStage?: ProductStage;
    priceHide?: string;
    heigth?: string;
    gwt?: string;
    nwt?: string;
    remarks?: string;
    title?: string;
    thicknessMin?: string;
    thicknessMax?: string;
    widthMin?: string;
    widthMax?: string;
    lengthMin?: string;
    lengthMax?: string;
    monthlyRequirement?: string;
}

export enum ProductStage {
    CART, WISHLIST, ORDER, PRODUCT_PREFERENCE, SALES, PURCHASE, REQUEST_QUOTATION
}

export interface UserGroup {
    userGroupId?: string;
    user?: UserDetail[];
    userRole?: UserRole;
    status?: Status;
    userGroupName?: string;
    productType?: string;
    productCategory?: string;
    thicknessMin?: string;
    thicknessMax?: string;
    widthMin?: string;
    widthMax?: string;
    temperMin?: string;
    temperMax?: string;
    userGroupNoOfUser?: string;
    userGroupDate?: string;
    alias?: string;
    createdDate?: string;
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
