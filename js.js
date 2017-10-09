function exampleCallback(entries, observer) {
	entries.forEach(function(entry) {
		if (entry.isIntersecting && entry.target.dataset.loaded != "true") {
			// debug for safari
			console.log(entry);
			entry.target.src = entry.target.dataset.src;
			entry.target.dataset.loaded = true;
		}
	});
}
startUp();

function startUp() {
	var options = {
	  root: null,
	  rootMargin: "0px",
	  threshold: 0
	};

	var images = document.querySelectorAll('img');

	// seems to be necessary for safari
	// loads all resources if at the top of the site
	var observer = [];
	for (var i = 0; i < images.length; i++) {
		// console.log(images[i]);
		// options.root = images[i];
		observer[i]= new IntersectionObserver(exampleCallback, options);
		observer[i].observe(images[i]);
	}
	// var observer;
	// observer = new IntersectionObserver(exampleCallback, options);
	// for (var i = 0; i < images.length; i++) {
	// 	observer.observe(images[i]);
	// }
}
