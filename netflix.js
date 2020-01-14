const tabItem = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');


function selectItem(e) {
	removeBorder();
	removeShow();

	// Add border to the current tab
	this.classList.add('tab-border');

	// Get tab content item
	//var tab = this.id;
	const tabContentItem = document.querySelector(`#${this.id}-content`);
    
	// Add the show class
	tabContentItem.classList.add('show');
}


function removeBorder() {
	tabItem.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
	tabContentItems.forEach(item => item.classList.remove('show'));
}

tabItem.forEach(item => item.addEventListener('click', selectItem)); 