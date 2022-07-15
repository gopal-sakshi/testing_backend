var keyData = {};
keyData.RFQ = {
	STORES: [`OUTPUTS`,`INPUTS`,`CONSUMER`,`SHAKTIMAN`,`TFRESH`,`APGREEN`, `SIKKIM`, `KUBER`],
	OUTPUTS:        getRFQConstant('BIZ'),
    INPUTS :        updateFarmStoreKey(getRFQConstant('FARM')),	
    // CONSUMER:   getRFQConstant('CONSUMER'),
	// SHAKTIMAN:  getRFQConstant(`SHAKTIMAN`),
	// APGREEN:    getRFQConstant(`APGREEN`),
	// SIKKIM:     getRFQConstant(`SIKKIM`),	
	// KUBER:  	    getRFQConstant(`KUBER`),
	RFQ_S3_PATH        	: 'data/requestForQuotes/',
	RFQ_S3_PUBLIC_PATH 	: 'data/requestForQuotes/public/',
	// SMS_KEYS			: SMS_KEYS,
	// SMS_TEMPLATES		: getSMSTemplates(),
	TABLE_NAME          : `request_for_quotes`,
	DOC_TYPE			: {
		RFQ: "RFQ",
		PRE_RFQ:"PRE_RFQ",
		TENDER: "TENDER",
		PENDING_RFQ:"PENDING_RFQ",
		QUOTATION: "QUOTATION"
	},
	PRESCRIPTION_TABLE_NAME: `prescriptions`,
	ACTIVITY_PHASE		: {
		ORGANIC_RFQ_CREATED:"ORGANIC_RFQ_CREATED",
		ASSISTED_RFQ_CREATED:"ASSISTED_RFQ_CREATED",		
		REFERENCE_SKU_ADDED_TO_RFQ:"REFERENCE_SKU_ADDED_TO_RFQ",		
	}
}

function updateFarmStoreKey(object) {
	let oldKey = {
		RFQ_SENT   : '_SENT',
		RFQ_INBOX  : '_INBOX',
		RFQ_LATEST : 'LATEST_RFQ',
		RFQ_SELLER : '_SELLER',
		RFQ_BUYER  : '_BUYER',
		ASSISTANT  : 'FRM_ASSISTANT_',
		METADATA   : 'FRM_METADATA_',
	}
	oldKey = Object.assign(object,oldKey);	
	return oldKey;
}

function getRFQConstant(s) {
	return {
		STORE               : `${s}_STORE`,
		RFQ_SENT   			: '_SENT',
		RFQ_INBOX  			: '_INBOX',
		RFQ_LATEST 			: `${s}_LATEST_RFQ`,
		RFQ_SELLER 			: `_${s}_SELLER`,
		RFQ_S3_PATH        	: 'data/requestForQuotes/',
		RFQ_S3_PUBLIC_PATH 	: 'data/requestForQuotes/public/',	
    }
}

var blah23 = keyData.RFQ['OUTPUTS'].RFQ_LATEST;
var blah24 = keyData.RFQ['INPUTS'].RFQ_LATEST;
var blah25 = keyData.RFQ['INPUTS'].RFQ_SENT;
console.log(blah23);
console.log(blah24);
console.log(blah25);


var blah27 = `{ unit: { label: 'Quintals', value: 'quintal' },
s3Url: 'data/requestForQuotes/public/RFQ224751709620B1',
title: 'Need 1 Quintals Mango',
details: '',
APP_NAME: 'OUTPUTS',
isPreRFQ: true,
preRFQId: 'PRFQ224751709620B',
quantity: 1,
createdBy: 
 { firstName: 'A Mounika',
   isLoginId: false,
   locationTo: [Object],
   mobileCode: '+91',
   profileKey: 'M01ru2s0PRFREG2021083120397411UNH001',
   businessName: '7382098227',
   locationLong: 'Krishna, Andhra Pradesh IND',
   profilePicUrl: 'https://kalgudi.com/data/profilepics/M01ru2s0PRFREG2021083120397411UNH001.png',
   businessTypeName: 'I run a business' },
createdTS: '2022-06-09T05:15:09.620Z',
isOrganic: true,
updatedTS: '2022-06-09T05:15:09.620Z',
STORE_NAME: 'OUTPUTS',
subAppName: 'tradersApp',
isProcessed: false,
isTraderApp: true,
productName: 'Mango',
currentState: 'NEW',
defaultImage: '/data/p_images/1587545291106.jpeg',
participants: [],
isAssistedRFQ: false,
numberOfViews: 0,
requirementId: 'RFQ224751709620B1',
totalEnquiries: 0,
stateInformation: 
 { actor: '',
   actions: [Object],
   entryTS: '2022-06-09T05:15:09.784Z',
   expiryTS: '',
   buyerActions: [Object],
   currentState: 'RFQ_CREATED',
   previousState: '',
   sellerActions: [Object],
   previousAction: '',
   targetedActors: [],
   actionPerformed: '' },
productSpecifications: [],
docType: 'RFQ',
basicProductDetails: { VProductName: 'Mango', VProductId: '0wse' },
isRecommended: true,
isViewed: false },`

console.log(JSON.stringify(blah27));