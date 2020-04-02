import { NavigationLink } from '../app/shared/interfaces/navigation-link';

export const departments: NavigationLink[] = [
       {label: 'Tin Free Steel', url: './shop', menu: {
        type: 'menu',
        items: [
            {label: 'Tinfree steel coils', url: './shop'},
            {label: 'Tinfree steel sheets', url: './shop'},
            {label: 'Tinfree steel strips', url: './shop'}
        ]
    }},
    {label: 'Tin Plate Steel', url: './shop', menu: {
        type: 'menu',
        items: [
            {label: 'Tin Plate steel coils', url: './shop'},
            {label: 'Tin Plate steel sheets', url: './shop'},
            {label: 'Tin Plate steel strips', url: './shop'}
        ]
    }},
    {label: 'Cold Rolled', url: './shop', menu: {
        type: 'menu',
        items: [
            {label: 'Cold Rolled coils', url: './shop'},
            {label: 'Cold Rolled sheets', url: './shop'},
            {label: 'Cold Rolled strips', url: './shop'}
        ]
    }},
    {label: 'Hot Rolled', url: './shop', menu: {
        type: 'menu',
        items: [
            {label: 'Hot Rolled coils', url: './shop'},
            {label: 'Hot Rolled sheets', url: './shop'},
            {label: 'Hot Rolled strips', url: './shop'}
        ]
    }},
    {label: 'BlackPlate', url: './shop', menu: {
        type: 'menu',
        items: [
            {label: 'BlackPlate coils', url: './shop'},
            {label: 'BlackPlate sheets', url: './shop'},
            {label: 'BlackPlate strips', url: './shop'}
        ]
    }},
    {label: 'Galvanealed', url: './shop', menu: {
        type: 'menu',
        items: [
            {label: 'Galvanealed coils', url: './shop'},
            {label: 'Galvanealed sheets', url: './shop'},
            {label: 'Galvanealed strips', url: './shop'}
        ]
    }},
    {label: 'Cold Rolled Full Hard', url: './shop', menu: {
        type: 'menu',
        items: [
            {label: 'CRFH coils', url: './shop'},
            {label: 'CRFH sheets', url: './shop'},
            {label: 'CRFH strips', url: './shop'}
        ]
    }},
    {label: 'Misprints',        url: './shop'},
    {label: 'Galvanised',        url: './shop'},
    {label: 'Color Coated',        url: './shop'},
    {label: 'Electro Galvanised',        url: './shop'},
];
