var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
// The String assigned to var DETAIL_IMAGE_SELECTOR is the data attribute for Image detail
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
// Assigned String is the data  attribtue for detail images title
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
// Assigned String is the data attribute for the URL of the detail images

function setDetails(imageUrl, titleText) {
  'use strict';
  //Code go here
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  //detailImage.setAttribute('src', 'img/otter3.jpg');
  detailImage.setAttribute('src',imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  //detailTitle.textContent = 'You Should be Dancing';
  detailTitle.textContent = titleText;
}


/*
imageFromThumb accepts the parameter, thumbnail ,
thumbnail parameter is a reference to a thumbnail anchor elements
retrieves returns value 'data-image-url' attribute
*/
function imageFromThumb (thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb (thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');

}

/*setDetailsFromthumb() brings the previous functions together so that you don't
have to call the functions separtely

It accepts a reference to a Thumbnail elements
Calls setDetails()
passes values from calling imageFromThumb() & titleFromThumb()
*/

function setDetailsFromThumb(thumbnail){
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  'use strict';
    thumb.addEventListener('click', function (event) {
	   event.preventDefault();
     setDetailsFromThumb(thumb);
   });
}

function getThumbnailsArray () {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

//Starts the applications JS
function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}
//Tell JS to run the initializeEvents() to start the application
initializeEvents();
