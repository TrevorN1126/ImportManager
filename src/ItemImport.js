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
    "System ID", "UPC", "EAN", "Custom SKU", "Manufacturer SKU",
    "Description", "MSRP", "Online", "Default Cost", "Price",
    "Tax", "Tags (multiple tags separated by commas)",
    "Category", "Sub Category", "Sub Category 2", "Sub Category 3",
    "Manufacturer", "Vendor", "Vendor ID/Part Number",
    "Quantity on Hand 1", "Reorder Point", "Reorder Level",
    "Matrix Group: Name", "Matrix Group: Group Attribute",
    "Matrix Group:Color", "Matrix Group: Size", "Matrix Group: 3",
    "Tax Class", "Serialized (boolean)", "Assembly Item (boolean)",
    "Non Inventory Item (boolean)", "Serial Numbers (string)",
    "Notes (string)", "Archived", "Photo URL 1", "Photo URL 2",
    "Photo URL 3", "Photo URL 4", "Photo URL 5",
    "Sell on WebStore (Boolean)", "Web Short Description",
    "Web Long Description", "Weight", "Length", "Width", "Height"
  ];

  var itemImport = import.createImport('Item Import', template);

  var upcChecker = import.createTest(
    'UPC Checker',
    'Test to check that the length of items in the upc column are atleast 12 characters long',
    function(){
      return;
    }.call(itemImport);
  );

  if (module) {
    exports = {
      createSheet: function(){
        return itemImport.createSheet();
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
}).call(this, IM, "ItemImport");
