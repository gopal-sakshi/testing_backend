const arr23 = [
    "abcd_1234",
    "efgh_3456",
    "ijkl_7842"
]

/*
    RFQ1
            QUOT 1
            QUOT 2      SKU_a
    RFQ2    
            QUOT 1
            QUOT 2      SKU_b
            QUOT 3      SKU_c
    RFQ3
            QUOT 1
            QUOT 2

            p1=L2_L3&
            p2=M2_M3&
            p3=N2_N3

            data/storeProducts/biz/L2
            data/storeProducts/biz/M2
            data/storeProducts/biz/N2

            v2/listing/products/l2/L2/l3/L3?storeType=BIZ_STORE
            v2/listing/products/l2/M2/l3/M3?storeType=BIZ_STORE
            v2/listing/products/l2/N2/l3/N3?storeType=BIZ_STORE


            check if user loggedIn
            v2/store/OUTPUTS/rfq/RFQ20004XXXX/details
            rest/v1/bizstore/orders/transportCharges?screen=CART
                payload = assistantDetails {}, buyerAddress {}, productList [], teamInvolved { }
*/


