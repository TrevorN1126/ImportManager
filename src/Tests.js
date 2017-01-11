//
//(function (host, expose) {
//  var module = { exports: {} };
//  var exports = module.exports;
//  /****** code begin *********/
//  
//
//  if (module) {
//    module.exports = {
//      test1: function(){return},
//      test2: function(){return},
//    };
//  }
//
//
// 
//  
//  
//  /****** code end *********/
//  ;(
//    function copy(src, target, obj) {
//      obj[target] = obj[target] || {};
//      if (src && typeof src === 'object') {
//        for (var k in src) {
//          if (src.hasOwnProperty(k)) {
//            obj[target][k] = src[k];
//          }
//        }
//      } else {
//        obj[target] = src;
//      }
//    }
//  ).call(null, module.exports, expose, host);
//}).call(this, IM, "ItemImport");
//
//
///*****************************************************************
//                        Test Functions 
//*****************************************************************/
//
//function test_ItemImport(){
//  Logger.log(IM);
//  Logger.log(IM.ItemImport);
//  
//  
//  
//}
