(function (host, expose) {
  var gapps = host;
  var module = { exports: {} };
  var exports = module.exports;
  /****** code begin *********/
  /**
  * @fileoverview
  * IM namespace
  */

  /**
  *
  *
  * @param {string}
  * @return {}
  */


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
    this.tests = [];
  };
  /**
  * gets the row data from the current sheet
  * @return {array} 2D array containing the row values
  */
  Import_.prototype.getData = function(){
    //also sets the sheet format to strings
    return SpreadsheetApp.getActiveSheet().getDataRange().setNumberFormat('@').getValues();
  };
  /**
  * gets the column data from the current sheet
  * @return {array} 2D array containing the column values
  */
  Import_.prototype.getColumns = function(){
    return _.zip.apply(null, this.getData());
  };
  /**
  * sets the row data from the current SpreadsheetApp.getActiveSheet()
  * @param {array} 2D array containing row values
  * @return {range} The data range
  */
  Import_.prototype.setData = function(data){
    var sheetRange = SpreadsheetApp.getActiveSheet().getRange(1, 1, data.length, data[0].length);
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
  * creates a new sheet from the objs template prop
  * If a sheet with the same name already exist, prompt the user
  * and rename the existing sheet and insert a new template sheet
  * @{return} The data range
  */
  Import_.prototype.createSheet = function(){
    var sheetName = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(this.type);
    if( !sheetName ){
      return SpreadsheetApp.getActiveSpreadsheet().insertSheet(this.type).appendRow(this.template);
    } else {
      var message = "A sheet named "+ this.name +" already exist. Would you like to rename the current sheet and create a new import?";
      var yesCB = function(){
        sheetName.setName(this.type +"-"+ _.now());
        return SpreadsheetApp.getActiveSpreadsheet().insertSheet(this.type).appendRow(this.template);
      }
      this.prompt(message, yesCB.bind(this), function(){return});
    }
  };
  /**
  * Adds dialog to sheet and prompts user for a response
  * @{str} Messgae to display
  * @{function} function to run if user prompts yes
  * @{function} function to run if the user prompts no
  * @ {return} the callback function called from the user prompt
  */
  Import_.prototype.prompt = function(message, yesCallback, noCallback){
    var ui = SpreadsheetApp.getUi(),
        response = ui.alert(message, ui.ButtonSet.YES_NO);
    response == ui.Button.YES ? (function(){return yesCallback()})(): (function(){return noCallback()})();
  }

  /**
  *
  * @param {string}
  * @param {string}
  * @param {string}
  * @param {function}
  * @constructor
  */
  function Util_(type, name, description, fn){
    this.type = type;
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
  /**
  * Method to describe the util
  * returns the type, name, description in an object
  * @return {function}
  */
  Util_.prototype.describe = function(){
    return {
      type: this.type,
      name: this.name,
      description: this.description
    };
  };
  //Module methods
  if (module) {
    exports = {
      createImport: function(type, template){
        return new Import_(type, template);
      },
      createTest: function(name, description, fn){
        return this.Tests.push(new Util_('Tests', name, description, fn));
      },
      createTool: function(name, description, fn){
        return new Util_('Tools', name, description, fn);
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
}).call(this, this, "IM");
