'use strict';

const common = require('./common');

function privacy (opts) {
  return new Promise((resolve) => {
    if (opts.id) {
      resolve();
    } else {
      throw Error('Either id or appId is required');
    }
  })
    .then(() => {
      const tokenUrl = `https://apps.apple.com/us/app/id${opts.id}`;
      return common.request(tokenUrl, {}, opts.requestOptions);
    })
    .then((html) => {
      const regExp = /token%22%3A%22([^%]+)%22%7D/g;
      const match = regExp.exec(html);
      const token = match[1];

      const url = `https://amp-api.apps.apple.com/v1/catalog/US/apps/${opts.id}?platform=web&fields=privacyDetails&l=en-us`;
      return common.request(url, {
        'Origin': 'https://apps.apple.com',
        'Authorization': `Bearer ${token}`
      }, opts.requestOptions);
    })
    .then((json) => {
      if (json.length === 0) { throw Error('App not found (404)'); }

      const privacyDetails = JSON.parse(json).data[0].attributes.privacyDetails;
      const privacyTypes = privacyDetails.privacyTypes;

      for (let i = 0; i < privacyTypes.length; i++) {
        console.log('[1] privacy_Type :', privacyTypes[i].privacyType);
        
        if (i == 0 && privacyTypes.length >= 2 && privacyTypes[i].privacyType == 'Data Used to Track You'){
          const cateList = privacyTypes[i].dataCategories;

          for ( let k = 0; k < cateList.length; k++){
            const cateListNM = cateList[k].dataCategory;
            const cateListTypes = cateList[k].dataTypes.map(String);
            console.log('\t' + cateListNM + ': ' + cateListTypes);
          }
        }
        const purposeList = privacyTypes[i].purposes;
        console.log('[2] purposes');

        for (let j = 0; j < purposeList.length; j++){
          var cateListStr = '';
          const cateList = purposeList[j].dataCategories;

          for ( let h = 0; h < cateList.length; h++){
            const cateDataTypeList = cateList[h].dataTypes;
            cateListStr = cateDataTypeList.map(String);
            console.log('\t' + cateList[h].dataCategory + ': ' + cateListStr);
          }

        }

      } 
      // return privacyDetails;
      return '';
    });
}

module.exports = privacy;
