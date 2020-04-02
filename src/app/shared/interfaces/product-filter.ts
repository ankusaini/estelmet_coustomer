export interface ProductFilterBase {
    name: string;
}

export interface ProductFilterCategory extends ProductFilterBase {
    type: 'categories';
    options: {
        items: {
            type: 'parent' | 'current' | 'child';
            count: number;
            name: string;
            checked?: boolean;
        }[];
        min: number;
        max: number;
        from: number;
        to: number;
    };
}

export interface ProductFilterPrice extends ProductFilterBase {
    type: 'price';
    options: {
        items: {
            type: 'parent' | 'current' | 'child';
            count: number;
            name: string;
            checked?: boolean;
        }[];
        min: number;
        max: number;
        from: number;
        to: number;
    };
}

export interface ProductFilterCheckbox extends ProductFilterBase {
    type: 'checkbox';
    options: {
        items: {
            label: string;
            count: number;
            checked: boolean;
            disabled: boolean;
        }[];
        min: number;
        max: number;
        from: number;
        to: number;
    };
}

export interface ProductFilterRadio extends ProductFilterBase {
    type: 'radio';
    options: {
        name: string;
        items: {
            label: string;
            count: number;
            checked: boolean;
            disabled: boolean;
        }[];
        min: number;
        max: number;
        from: number;
        to: number;
    };
}

export interface ProductFilterColor extends ProductFilterBase {
    type: 'color';
    options: {
        items: {
            label: string;
            count: number;
            color: string;
            checked: boolean;
            disabled: boolean;
            white: boolean;
            light: boolean;
        }[];
        min: number;
        max: number;
        from: number;
        to: number;
    };
}

export type ProductFilter = ProductFilterCategory | ProductFilterPrice | ProductFilterCheckbox | ProductFilterRadio | ProductFilterColor;
