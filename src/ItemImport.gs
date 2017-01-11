
(function (host, expose) {
  var host = import;
  var module = { exports: {} };
  var exports = module.exports;
  /****** code begin *********/
  var ss = SpreadsheetApp.getActiveSpreadsheet(),
  sheet = ss.getActiveSheet();
  /**
  * @fileoverview
  * IH namespace
  */

  /**
  *
  *
  * @param {string}
  * @return {}
  */

  if (module) {
    exports = {
      createImport: function(type, template){
        return new Import_(type, template);
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
  ).call(null, module.exports, expose, host);
}).call(this, IM, "ItemImport");
