console.log("xx");

function exampleCallback(entries, observer) {
	// console.log("reached", entries);

	// console.log("target", entries[0].target);
	// console.log("target data-src", entries[0].target.dataset.src);
	// console.log("target src", entries[0].target.src);

	// console.log("observer", observer);
	console.log("observed!");

}

// var observer = [];
var observer;

var options = {
  root: null,
  rootMargin: "0px",
  threshold: 1
};

var firstImage = document.querySelector('img.first');
var secondImage = document.querySelector('img.second');
// var thirdImage = document.querySelector('img.third');
// var fourthImage = document.querySelector('img.fourth');
// var fifthImage = document.querySelector('img.fifth');
console.log(secondImage);
var images = document.querySelectorAll('img');

// for (let i = 0; i < images.length; i++) {
// 	observer[i]= new IntersectionObserver(exampleCallback, options);
// 	console.log(images[i]);
// 	observer[i].observe(images[i]);
// }

console.log("observer array: ",observer);

// observer = new IntersectionObserver(exampleCallback, options);
// observer.observe(images);

observer = new IntersectionObserver(exampleCallback, options);
observer.observe(secondImage);
observer.observe(firstImage);
// for (let i = 0; i < images.length; i++) {
// 	observer.observe(images[i]);
// }

// images.forEach(function(x,IntersectionObserverdex) {
// 	observer[index] = new IntersectionObserver(exampleCallback, options);
// 	observer[index].observe(x);
// });