var IH = IH || {};

//if (ScriptProperties.getProperty(SS_ID) == null) ScriptProperties.setProperty('SS_ID', SpreadsheetApp.getActiveSpreadsheet().getId());

function onOpen(e) {
  Logger.log(e);
  var menu = SpreadsheetApp.getUi().createAddonMenu(); // Or DocumentApp or FormApp.
  if (e && e.authMode == ScriptApp.AuthMode.NONE) {
    // Add a normal menu item (works in all authorization modes).
    menu.addItem('Start Import', 'startImport_menu');
  } else {
    // Add a menu item based on properties (doesn't work in AuthMode.NONE).
    var properties = PropertiesService.getDocumentProperties();
    var importStarted = properties.getProperty('');
    if (importStarted) {
      menu.addItem('Continue current import', 'continueImport');
    } else {
      menu.addItem('Start import auth', 'startImport_menu');
    }

  }
  menu.addToUi();
}

//menu functions
function startImport_menu() {
//    var createImportHtml = "CreateImport";
//    var title = "Create Import";
//    var html = HtmlService.createHtmlOutputFromFile(createImportHtml)
//    .setWidth(400)
//    .setHeight(300);
//    SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
//    .showModalDialog(html, title);
}


//button functions
// replace with exposeRun()
function createItemImport_bttn(){
  var type = 'itemImport';
  IH.createImport(type);
}


/*****************************************************************
                        Test Functions 
*****************************************************************/

function test_IH(){
  Logger.log(IH);
  IH.createItemImport();
//  Logger.log(IH.ItemImport.sanitizeData());
  
  
  
  
}
