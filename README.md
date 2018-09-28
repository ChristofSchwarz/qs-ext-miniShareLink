# qs-ext-miniShareLink
Minimalistic share button to copy a link to the current sheet including the current selections. The syntax is defined in the App Integration API https://help.qlik.com/en-US/sense-developer/September2018/Subsystems/APIs/Content/Sense_ClientAPIs/app-integration-api.htm 

The link will consist of the browser-url until the sheet id (more restful parameters will be skipped, like /state/analysis/language/de/options/developer ...) and then the selection parameters will follow like /select/&lt;field1>/[value1];[value2]/select/&lt;field2>/[value1];[value2] ...

The url is presented to you in a browser prompt, from which you may copy it. Or you can proceed with OK to open the link with your default mail editor with a "mailto:" hyperlink.

![alttext](https://github.com/ChristofSchwarz/pics/raw/master/sharethis.gif "Screenshot")
