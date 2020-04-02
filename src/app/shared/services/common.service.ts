import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { ShopFilter } from '../interfaces/sales-filter';

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    constructor(private apiService: ApiService) { }

    baseUrl = '/estelmet';

    successResponse(response) {
        try {
            if (response) {
                return response;
            }
        } catch (ex) {
            console.log(ex);
        }
        return response;
    }
    /**
     * API's For RFQ
     */
    getAllProductType() {
        return this.apiService
            .get(`${this.baseUrl}/inventory/productClassification/getProductType`)
            .pipe(map(this.successResponse));
    }

    getAllProductClass() {
        return this.apiService
            .get(`${this.baseUrl}/inventory/productClassification/getProductClass`)
            .pipe(map(this.successResponse));
    }

    getAllProductShape() {
        return this.apiService
            .get(`${this.baseUrl}/inventory/productClassification/getProductShape`)
            .pipe(map(this.successResponse));
    }

    getAllProductTemper() {
        return this.apiService
            .get(`${this.baseUrl}/inventory/productClassification/getProductTemper`)
            .pipe(map(this.successResponse));
    }

    getAllProductCategory() {
        return this.apiService
            .get(`${this.baseUrl}/inventory/productClassification/getProductCategory`)
            .pipe(map(this.successResponse));
    }

    /**
     * API's for RFQ end
     */

    /**
     * API's Call for OFFERS
     */

    getAllGeneralOffers() {
        return this.apiService
            .get(
                `${this.baseUrl}/sales/getAllSalesBySalesOfferTypeAndStatus/GENERAL_OFFER/APPROVED`
            )
            .pipe(map(this.successResponse));
    }

    getAllHotOffer() {
        return this.apiService
            .get(
                `${this.baseUrl}/sales/getAllSalesBySalesOfferTypeAndStatus/HOT_OFFER/APPROVED`
            )
            .pipe(map(this.successResponse));
    }

    getAllLatestOffer() {
        return this.apiService
            .get(
                `${this.baseUrl}/sales/getAllSalesBySalesOfferTypeAndStatus/LATEST_OFFER/APPROVED`
            )
            .pipe(map(this.successResponse));
    }

    /**
     * API calls for OFFERS end
     */

    getAllProductsOfASales(saleId) {
        return this.apiService
            .get(`${this.baseUrl}/inventory/sales/${saleId}`)
            .pipe(map(this.successResponse));
    }

    getProductById(productId) {
        return this.apiService
            .get(`${this.baseUrl}/inventory/find/${productId}`)
            .pipe(map(this.successResponse));
    }

    getAllProductByProductStageAndStatus(stage, status) {
        return this.apiService
            .get(
                `${this.baseUrl}/getAllProductByProductStageAndStatus/${status}/${stage}`
            )
            .pipe(map(this.successResponse));
    }

    getUserById(userId) {
        return this.apiService
            .get(
                `${this.baseUrl}/users/find/${userId}`
            )
            .pipe(map(this.successResponse));
    }

    getAllFilter() {
        return this.apiService
            .get(
                `${this.baseUrl}/inventory/productFilters`
            )
            .pipe(map(this.successResponse));
    }

    getAllProduct(data: ShopFilter) {
        return this.apiService
            .post(
                `${this.baseUrl}/inventory/searchFilter`, data
            )
            .pipe(map(this.successResponse));
    }
}
