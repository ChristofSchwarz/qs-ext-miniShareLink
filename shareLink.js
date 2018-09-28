define( ["qlik"],
function (qlik) {
	return {
		support : {
			snapshot: false,
			export: false,
			exportData : false
		},
		paint: function ($element) {
			var self = this; 
			var ownId = this.options.id;             
			var app = qlik.currApp(this);
			var sheet = qlik.navigation.getCurrentSheetId();
			$element.html( `<a id="click${ownId}"><img src="/extensions/shareLink/Share1.png" height="24" width="24"></a>`);
			$(`#click${ownId}`).click(function(){
				var qFormula = "GetCurrentSelections(']/select/','/[','];[', 1000)";
				app.model.enigmaModel.evaluate(qFormula).then(result => {
					var url = document.location.origin + '/sense/app/' + encodeURIComponent(app.id) + '/sheet/' 
						+ sheet.sheetId + '/select/' + encodeURI(result) + '%5D';
					url = url.replace('/select/-%5D','');
					if ( window.prompt("Copy this link - click OK to open in mail", url)) {
						window.open('mailto:?body='+escape(url),'_new');
					};
				})	
			});
			return qlik.Promise.resolve();
		}
	};
});

