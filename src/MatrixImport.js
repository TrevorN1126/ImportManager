(function (host, expose) {
  var importModule = host;
  var module = { exports: {} };
  var exports = module.exports;
  /****** code begin *********/
  /**
  * @fileoverview
  * ItemImport module - holds the Item Import template, tools and tests
  */

  /**
  *
  */
  var template = [
             "Matrix ID", "Description", "Matrix Group: Group Attribute", "MSRP",
             "Online", "Default Cost", "Price", "Tax", "Tags (multiple tags separated by commas)",
             "Category", "Sub Category", "Sub Category 2", "Sub Category 3", "Manufacturer", "Vendor",
             "Tax Class", "Serialized (boolean)", "Assembly Item (boolean)", "Non Inventory Item (boolean)",
             "Notes (string)", "Archived", "Photo URL 1", "Photo URL 2", "Photo URL 3", "Photo URL 4", "Photo URL 5",
             "Web Short Description", "Web Long Description", "Weight", "Length", "Width", "Height"
  ];

  var matrixImport = importModule.createImport('Matrix Import', template);

  if (module) {
    exports = {
      createSheet: function(){
        return matrixImport.createSheet();
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
}).call(this, IM, "MatrixImport");
