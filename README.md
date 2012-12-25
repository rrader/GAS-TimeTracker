TimeTracker based on Google Spreadsheets and Apps Script

[![endorse](http://api.coderwall.com/antigluk/endorsecount.png)](http://coderwall.com/antigluk)

Installation
-----------------------------

  1. Go to https://www.google.com/calendar/ , create calendar named TimeTracking (you can hide it if you wish, it's just storage)

  2. Go to https://docs.google.com/ and create new spreadsheet.

  3. Rename first sheet to "TimeTracking"

  4. Create new sheet named "Plans"

  5. Now, open menu Tools -> Script editor...
  
  6. Paste there contents of Code.js file. Change first lines of script depends on your personal work terms.

  7. Go to File -> New -> Script file. Name it "Ui" and paste there contents of Ui.js file.

  8. Here you go! Save files and reload page with spreadsheet.

Now you can see new menu named "TimeTracker".

Using
-----------------------------
When you arrived at work, open spreadsheet and choose menu TimeTracker->Arrived at work... and enter time when you arrived.
Also you can write out comment for this day. Click OK.

When you go home, choose menu TimeTracker->Still on work, it will expand today work to current time.

Troubleshooting
-----------------------------
You can always go to Google Calendar and modify all events as you wish.

After modifying just choose TimeTracker->Reload from calendar to reload data.
