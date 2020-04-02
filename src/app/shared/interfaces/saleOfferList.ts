import { TemplateRef } from '@angular/core'

export interface hardness{
    id: number, 
    productHardness: string, 
    description: string
}
export interface ProductAnnealing {
    id: number, 
    productAnnealing: string, 
    description: string;
}
export interface ProductAnnealing {
    id: number, 
    productAnnealing: string, 
    description: string;
}
 export interface ProductCategory {
    id: number, 
    productCategory: string, 
    description: string, 
    parentId: number
} 
export interface SaleOffer {
    columnLocation: any,
    createdBy: number
    createdDate: string,
    deliveryOrderId: any,
    field: any,
    gpId: any,
    grnId: number
    gwt: number
    gwtkata: any,
    hardnessMax: hardness,
    hardnessMin: hardness,
    heigth: string,
    lastModifiedBy: number,
    lastModifiedDate: string, 
    lengthMax: number
    lengthMin: number
    lengthToBeCut: any,
    materialHSNSACCode: any,
    materialPricePerKG: any,
    materialPriceValue: any,
    materialTotalAmountInWords: any,
    materialTransferId: any,
    nwt: number,
    nwtkata: any,
    other: any,
    packagingType: any,
    priceHide: any,
    product: any,
    productAnnealing: ProductAnnealing, 
    productCategory: ProductCategory, 
    productClass: any,
    productCoating: any,
    productDefect: any,
    productFinish: any,
    productId: number,
    productOiling: any,
    productOrigin: any,
    productPackaging: any,
    productProcessingId: any,
    productShape: any,
    productStage: string;
    productSurfaceCoating: any;
    productType: any;
    purchaseId: number
    remarks: string,
    rowLocation: any,
    salesId: number
    status: any,
    surfaceFinish: any,
    temperMax: temper,
    temperMin: temper,
    thicknessMax: number,
    thicknessMin: number,
    title: any,
    warehouse: warehouse,
    widthMax: number,
    widthMin: number,
    widthToBeCut: any,
}
export interface warehouse {
    address: string,
    city: string,
    companyId: number,
    country: string,
    id: number,
    landline: "09870583373"
    name: string,
    pincode: string,
    state: string,
}
export interface temper {
    id: number, 
    productTemper: string, 
    description: string
}