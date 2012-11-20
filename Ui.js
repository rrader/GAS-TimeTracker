function uiStartWork() {
  var app = UiApp.createApplication().setTitle('Arrived at work at...');

  var grid = app.createGrid(2, 3);
  grid.setWidget(0, 0, app.createLabel('Start time:'));
  grid.setWidget(0, 1, app.createTextBox().setName('hh').setId('hh'));
  grid.setWidget(0, 2, app.createTextBox().setName('mm').setId('mm'));
  grid.setWidget(1, 0, app.createLabel('Comments:'));
  grid.setWidget(1, 1, app.createTextBox().setName('comment'));

  var button = app.createButton('Ok');
  var panel = app.createVerticalPanel();

  var handler = app.createServerHandler('setStartWork');
  handler.addCallbackElement(grid);
  button.addClickHandler(handler)
  panel.add(grid);
  panel.add(button);
  app.add(panel);
  SpreadsheetApp.getActiveSpreadsheet().show(app);
}

function onOpen() {   
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var menuEntries = [{name: "Reload from calendar", functionName: "importEvents"},
                     {name: "Still on work", functionName: "stillWork"},
                     {name: "Arrived at work...", functionName: "uiStartWork"}];
  ss.addMenu("TimeTracker", menuEntries);  
}