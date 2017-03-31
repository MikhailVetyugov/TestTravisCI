var badge = require('gh-badges');

badge({ text: ["build", "passed"], colorscheme: "green", template: "flat" },
	function(svg, err) {
	  console.log(svg);
	});