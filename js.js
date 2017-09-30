function exampleCallback(entries, observer) {
	entries.forEach(function(entry) {
		if (entry.isIntersecting && entry.target.dataset.loaded != "true") {
			entry.target.src = entry.target.dataset.src;
			entry.target.dataset.loaded = true;
		}
	});
}
startUp();

function startUp() {

	var observer = [];
	var options = {
	  root: null,
	  rootMargin: "0px",
	  threshold: 0
	};

	var images = document.querySelectorAll('img');

	for (let i = 0; i < images.length; i++) {
		observer[i]= new IntersectionObserver(exampleCallback, options);
		observer[i].observe(images[i]);
	}
}
