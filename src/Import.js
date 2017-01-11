
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
  * @return {}
  */

  if (module) {
    exports = {
      createImport: function(type, template){
        return new Import_(type, template);
      },
    };
  }


  /**
  * @fileoverview Contains the class definitions & prototypes.
  **/
  /**
  *
  * @param {string}
  * @param {array}
  * @constructor
  */
  function Import_(type, template){
    this.type = type;
    this.template = template;
    this.tools = [];
    this.test = [];
  };
  /**
  * gets the row data from the current sheet
  * @return {array} 2D array containing the row values
  */
  Import_.prototype.getData = function(){
    //also sets the sheet format to strings
    return sheet.getDataRange().setNumberFormat('@').getValues();
  };
  /**
  * gets the column data from the current sheet
  * @return {array} 2D array containing the column values
  */
  Import_.prototype.getColumns = function(){
    return _.zip.apply(null, this.getData());
  };
  /**
  * sets the row data from the current sheet
  * @param {array} 2D array containing row values
  * @return {range} The data range
  */
  Import_.prototype.setData = function(data){
    var sheetRange = sheet.getRange(1, 1, data.length, data[0].length);
    return sheetRange.clear().setValues(data);
  };
  /**
  *           Not Tested
  * @param {}
  * @return {}
  */
  Import_.prototype.setColumn = function(data, colIndex){

  }
  /**
  * sets the column data from the current sheet
  * @{array} 2D array containing column values
  * @{return} The data range
  */
  Import_.prototype.setColumns = function(data){
    var newData = _.unzip(data);
    return this.setData(newData);
  };
  /**
  * add an import tool to an import instance
  * @param {object} Util_ instance
  * @constructor
  */
  Import_.prototype.addTool = function(toolObj){
    this.tools.push(toolObj);
  };
  /**
  * add an import test to an import instance
  * @param {object} Util_ instance
  * @constructor
  */
  Import_.prototype.addTest = function(testObj){
    this.tests.push(testObj);
  };

  /**
  *
  * @param {string}
  * @param {string}
  * @param {function}
  * @constructor
  */
  function Util_(name, description, fn){
    this.name = name;
    this.description = description;
    this.fn = fn;
  };
  /**
  * Method to run the util
  * @param {array}
  * @return {function}
  */
  Util_.prototype.run = function(arguments){
    return this.fn.apply(this, arguments);
  };

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
}).call(this, this, "IM");
