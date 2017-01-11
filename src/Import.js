
(function (host, expose) {
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
  * @return {Service_} The service object.
  */
  function createItemImport() {
    var import = new ItemImport();
    return import.create();
  }
  /**
  * Adds dialog to sheet and prompts user for a response
  * @{str} Messgae to display
  * @{function} function to run if user prompts yes
  * @{function} function to run if the user prompts no
  * @ {return} the callback function called from the user prompt
  */
  function prompt(message, yesCallback, noCallback){
    var ui = SpreadsheetApp.getUi(),
    response = ui.alert(message, ui.ButtonSet.YES_NO);
    response == ui.Button.YES ? (function(){return yesCallback()})(): (function(){return noCallback()})();
  }
    
  if (module) {
    module.exports = {
      createItemImport: createItemImport(),
      prompt: prompt,
    };
  }
  
  
  /**
  * @fileoverview Contains the Import_ class.
  */
  
  
  /**
  * 
  * @param {string} .
  * @constructor
  */
  function Import(){
    this.name = '';
    this.template = [];
    this.sidebarFile = '';
    this.sheetId = '';
  };
    // Import Prototype  
  Import.prototype.getSheetId = function(){
    //also sets the sheet format to strings
    return PropertiesService.getDocumentProperties().getProperty('sheetId');
  };
  Import.prototype.setSheetId = function(sheetId){
    //set the instance prop sheetId and the doc property sheetId
    return this.sheetId(PropertiesService.getDocumentProperties().setProperty('sheetId', sheetId).getProperty('sheetId'));
  };
  /**
  * gets the row data from the current sheet
  * @{return} 2D array containing the row values
  */
  Import.prototype.getData = function(){
    //also sets the sheet format to strings
    return sheet.getDataRange().setNumberFormat('@').getValues();
  };
  /**
  * gets the column data from the current sheet
  * @{return} 2D array containing the column values
  */
  Import.prototype.getColumns = function(){
    return _.zip.apply(null, this.getData());
  };
  /**
  * sets the row data from the current sheet
  * @{array} 2D array containing row values
  * @{return} The data range 
  */
  Import.prototype.setData = function(data){
    var sheetRange = sheet.getRange(1, 1, data.length, data[0].length);
    return sheetRange.clear().setValues(data);
  };
  /**
  *           Not Tested
  * @{} 
  * @{return}  
  */
  Import.prototype.setColumn = function(data, colIndex){
  
  }
  /**
  * sets the column data from the current sheet
  * @{array} 2D array containing column values
  * @{return} The data range 
  */
  Import.prototype.setColumns = function(data){
    var newData = _.unzip(data);
    return this.setData(newData);
  };
  
  Import.prototype.sheetId
  
  /**
  * @fileoverview Contains the ItemImport subclass.
  */
  //item import constructor
  function ItemImport(){
    Import.call(this);
    this.name = "Item Import"
    this.template = ["System ID", "UPC", "EAN", "Custom SKU", "Manufacturer SKU",
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
                     "Web Long Description", "Weight", "Length", "Width", "Height"];
    
    
  }
  
  ItemImport.prototype = Object.create(Import.prototype);
  
  ItemImport.prototype.create = function(){
    var sheetId = this.getSheetId();
    if( !sheetId ){
      //create new sheet, append template, set the sheetid
      return this.setSheetId(ss.insertSheet(this.name).appendRow(this.template).getSheetId());
    } else {
      var message = "A sheet named "+ this.name +" already exist. Would you like to rename the current sheet and create a new import?";
      var yesCB = function(){
        sheetName.setName(this.name +"-"+ _.now());
        return ss.insertSheet(this.name).appendRow(this.template);
      }
      IH.prompt(message, yesCB.bind(this), function(){return});
    }
  };
  
  /**
  * @fileoverview Contains the MatrixImport subclass.
  */
  //matrix import constructor
  function MatrixImport(template){
    Import.call(this);
    this.template = template;
    
  }
  
  MatrixImport.prototype = Object.create(Import.prototype);
  
  
  /**
  * Returns true if the given value is empty, false otherwise. An empty value is one of
  * null, undefined, a zero-length string, a zero-length array or an object with no keys.
  * @param {?} value The value to test.
  * @returns {boolean} True if the value is empty, false otherwise.
  * @private
  */
  //function isEmpty_(value) {
  //  return value === null || value === undefined ||
  //      ((_.isObject(value) || _.isString(value)) && _.isEmpty(value));
  //}
  
  
  
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
}).call(this, this, "IH");