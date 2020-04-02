export interface Product {
    checked ?: boolean;
    addToCart ?: boolean;
    productId?: number;
    images ?: string[];
    features?: ProductFeature[];
    productType?: ProductType;
    productCategory?: ProductCategory;
    productShape?: ProductShape;
    productClass?: ProductClass;
    productFinish?: ProductFinish;
    productCoating?: ProductCoating;
    productPackaging?: ProductPackaging;
    productDefect?: ProductDefect;
    productAnnealing?: ProductAnnealing;
    productOiling?: ProductOiling;
    productOrigin?: ProductOrigin;
    productSurfaceCoating?: ProductSurfaceCoating;
    temperMin?: ProductTemper;
    temperMax?: ProductTemper;
    productStage?: ProductStage;
    status?: Status;
    thicknessMin?: string;
    thicknessMax?: string;
    widthMin?: string;
    widthMax?: string;
    lengthMin?: string;
    lengthMax?: string;
    hardnessMin?: ProductHardness;
    hardnessMax?: ProductHardness;
    heigth?: string;
    field?: string;
    gwt?: string;
    nwt?: string;
    remarks?: string;
    packagingType?: string;
    userProductPreference?: UserProductPreference;
    description?: string;
    createdBy?: string;
    createdDate?: Date;
    lastModifiedBy?: string;
    lastModifiedDate?: Date;
    title ?: string;
}

export enum UserProductPreference {
    CART = 'CART',
    Wishlist = 'Wishlist',
    ORDER = 'ORDER',
    PREFERENCE = 'PREFERENCE',
    SALES = 'SALES',
    PURCHASE = 'PURCHASE',
    REQUEST_QUOTATION = 'REQUEST_QUOTATION'
}

export interface ProductType {
    id?: string;
    productType?: string;
    description?: string;
}

export interface ProductCategory {
    id?: string;
    productCategory?: string;
    description?: string;
    parentId?: string;
}

export interface ProductShape {
    id?: string;
    productShape?: string;
    description?: string;
    parentId?: string;
}

export interface ProductClass {
    id?: string;
    productClass?: string;
    description?: string;
}

export interface ProductFinish {
    id?: string;
    productFinish?: string;
    description?: string;
}

export interface ProductCoating {
    id?: string;
    productCoating?: string;
    description?: string;
}

export interface ProductSurfaceCoating {
    id?: string;
    productSurfaceCoating?: string;
    description?: string;
}

export interface ProductPackaging {
    id?: string;
    productPackaging?: string;
    description?: string;
}

export interface ProductDefect {
    id?: string;
    productDefect?: string;
    description?: string;
}

export interface ProductAnnealing {
    id?: string;
    productAnnealing?: string;
    description?: string;
}

export interface ProductOiling {
    id?: string;
    productOiling?: string;
    description?: string;
}

export interface ProductOrigin {
    id?: string;
    productOrigin?: string;
    description?: string;
}

export interface ProductTemper {
    id?: string;
    productTemper?: string;
    description?: string;
}

export interface ProductHardness {
    id?: string;
    productHardness?: string;
    description?: string;
}

export enum ProductStage {
    TEMP = 'TEMP',
    TRANFERRING = 'TRANFERRING',
    ACTIVE = 'ACTIVE',
    JOB_WORK_OTHERS = 'JOB_WORK_OTHERS',
    UNDER_PROCESSING = 'UNDER_PROCESSING',
    PROCESSED = 'PROCESSED',
    SOLD_OUT = 'SOLD_OUT',
    MAILED_TO_CUSTOMER = 'MAILED_TO_CUSTOMER',
    UPLOADED_ON_WEBSITE = 'UPLOADED_ON_WEBSITE',
    UPLOADED_FOR_AUCTION = 'UPLOADED_FOR_AUCTION',
    CONFIRMED_BY_CUSTOMER = 'CONFIRMED_BY_CUSTOMER',
    DELETED = 'DELETED'
}

export enum Status {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
    ONHOLD = 'ONHOLD'
}


export interface ProductFeature {
    name?: string;
    value?: string;
}

export interface ProductFeaturesSection {
    name?: string;
    features?: ProductFeature[];
}

export interface ProductReview {
    avatar?: string;
    author?: string;
    rating?: number;
    date?: string;
    text?: string;
}

// export interface Product {
//     id?: number;
//     name?: string;
//     description ??:string;
//     price?: number;
//     compareAtPrice?: number|null;
//     images?: string[];
//     badges?: ('sale'|'new'|'hot')[];
//     rating?: number;
//     thickness?: string;
//     reviews?: number;
//     availability?: string;
//     features?: ProductFeature[];
//     options?: Array<any>;
// }
