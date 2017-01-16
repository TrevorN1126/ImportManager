(function (host, expose) {
  var importModule = host;
  var module = { exports: {} };
  var exports = module.exports;
  /****** code begin *********/
  /**
  * @fileoverview
  * IM namespace
  **/
  /**
  * Item Import Model Template
  **/
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

  /****** Item Import Instance *********/
  var itemImport = importModule.createImport('Item Import', template);

  /****** Item Import Tests *********/
  var upcChecker = itemImport.addTest(
    'UPC Checker',
    'Test to check that the length of items in the upc column are atleast 12 characters long.' +  "\n" +
    'The function takes an array of upc values and returns a 2d array of bad upcs.'+  "\n" +
    'the data passed to the function should be strings.',
    function(data){
      Logger.log(this);
      var upcColumn = data || itemImport.getColumns()[1],
      //add header row to returned list
      badUpcList = [['UPCs','Row Index']];
      for (var i = 1, x = upcColumn.length; i<x; i++){
        //if length is < 12 push the [upc value and row index] to returned list
        if(upcColumn[i].length < 12){
          var badbUpc = [
            upcColumn[i],
            i+1
          ];
          badUpcList.push(badbUpc);
        }
      }
      return badUpcList;
    }
  );

  Logger.log("Test[0].run(): %s",upcChecker.run(['upc','2565656','43543434344443','6767762']));
//  Logger.log("Test[0].name: %s", itemImport.tests[0].name);
//  Logger.log("UPC Checker: %s", upcChecker.describe());
//  Logger.log(itemImport.getUtil('tests','UPC Checker').describe());

  /****** Item Import Tools *********/

  /****** Module Methods *********/
  if (module) {
    exports = {
      createSheet: function(){
        return itemImport.createSheet();
      },
      /**
      * @param {string} name of the util
      * @param {array} of agruments passed to the util run fn
      **/
      runTool: function(utilName, arguments){
        return itemImport.getUtil('tools',utilName).run(arguments);
      },
      initTests: function(){
        var data = itemImport.getData();
        //itemImport.getUtil('tools','Sanitize Data').run(data);
        itemImport.getUtil('tests','UPC Checker').run(itemImport.getColumn('UPC',data));
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
