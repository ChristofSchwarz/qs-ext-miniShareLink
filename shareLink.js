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
			$element.html( `<a id="click${ownId}">
			<img width="24" height="24" src="data:image/png;base64,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">
			</a>`);
			$(`#click${ownId}`).click(function(){
				var qFormula = "GetCurrentSelections(']/select/', '/[', '];[', 1000)";
				app.model.enigmaModel.evaluate(qFormula).then(result => {
					var urlArr = document.location.href.split('/');
					var url = urlArr.splice(0, urlArr.indexOf('sheet') + 2).join('/') + '/select/' + encodeURI(result) + '%5D';
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

