CKEDITOR.plugins.add('tribute', {
	icons: 'timestamp',
	init: function (editor) {
		var pluginDirectory = this.path;
		editor.addContentsCss(pluginDirectory + 'styles/tribute.css');

		editor.on('contentDom', function () {

			var tributeOptions = editor.config.tributeOptions || {
				allowSpaces: true,
				trigger: '%',
				selectTemplate: function (item) {
					return '%' + item.original.value + '%';
				}
			};
			tributeOptions["iframe"] = editor.document.getWindow().$;
			tributeOptions["values"] = editor.config.tributeValues || [];

			var tributeInstance = new Tribute(tributeOptions);
			tributeInstance.attach(editor.document.getBody().$);

			editor.editable().on('keydown', function (e) {
				if (e.data.$.which == 13 && tributeInstance.isActive) {
					return false;
				}
			}, null, null, 5);

			editor.on('blur', function (evt) {
				tributeInstance.hideMenu();
			});

			editor.on('maximize', function (evt) {
				tributeInstance.hideMenu();
			});
		});
	}
});