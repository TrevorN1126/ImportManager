(function (host, expose) {
  var import = host;
  var module = { exports: {} };
  var exports = module.exports;
  /****** code begin *********/
  /**
  * @fileoverview
  * IM namespace
  */

  /**
  *
  */
  var template = [
    "First Name", "Last Name", "Title", "Company", "DOB", "Address 1", "Address 2",
    "City", "State", "Zip Code", "Country", "Home Phone", "Work Phone", "Fax", "Pager",
    "Mobile", "E-Mail", "E-Mail 2", "Website", "Custom", "Notes", "Tax Category",
    "Discount Category", "Customer Type", "Account Balance", "Credit Limit", "Tags"
  ];

  var customerImport = import.createImport('Customer Import', template);

  if (module) {
    exports = {
      createSheet: function(){
        return customerImport.createSheet();
      },
    };
  }

  /****** code end *********/
  ;(
    function copy(src, target, obj) {
      obj[target] = obj[target] || {};
      if (src && typeof src === 'object') {
        for (var k in src) {
          if (src.hasOwnProperty(k)) {
            obj[target][k] = src[k];
          }
        }
      } else {
        obj[target] = src;
      }
    }
  ).call(null, exports, expose, host);
}).call(this, IM, "CustomerImport");
