// window.onload = function () {
//     prepareGallery();
// }

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
addLoadEvent(createThumbnail);

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof oldonload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (targetElement == parent.lastChild) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function preparePlaceholder() {
    var placeholder = document.createElement('img'),
        description = document.createElement('p'),
        descrtText = document.createTextNode('Choose an image'),
        imageGallery = document.getElementById('imagegaller'),
        fragment = document.createDocumentFragment();

    placeholder.setAttribute('ale', 'my image gallery');
    placeholder.setAttribute('id', 'placeholder');
    fragment.appendChild(placeholder);
    description.setAttribute('id', 'description');
    description.appendChild(descrtText);
    fragment.appendChild(description);

    insertAfter(fragment, imageGallery);
}

function createThumbnail() {
    var imageGallery = document.getElementById('imagegaller'),
        list = imageGallery.getElementsByTagName('a');

    for (var i=0, len = list.length; i < len; i++) {
        var img = document.createElement('img'),
            source = list[i].getAttribute('href');
        img.setAttribute('src', source);
        list[i].replaceChild(img, list[i].firstChild);
    }
}

function prepareGallery() {
    var imageGallery = document.getElementById('imagegaller'),
        links = imageGallery.getElementsByTagName('a');
    for (var i=0, len = links.length; i < len; i++) {
        links[i].onclick = function (event) {
            return showPic(this) ? event.preventDefault() : true;
        }
    }
}

function showPic(pic) {
    var source = pic.getAttribute('href'),
        placeholder = document.getElementById('placeholder'),
        descriptionContent = document.getElementById('description');
    if (placeholder.nodeName !='IMG') return false;
    placeholder.setAttribute('src', source);
    if (descriptionContent.firstChild.nodeType == 3) {
        var text = pic.getAttribute('title') ? pic.getAttribute('title') : '';
        descriptionContent.firstChild.nodeValue = text;
    }
    return true;
}
