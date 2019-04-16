# Video Search Engine (React)

This application will acts similar to YouTube app, like search vides according to the context and display a the result in list. Each click on item from list will display details about the video and will give option to play.  

### Applicaiton feature

* Search video 
* Use of YouTube api
* List of videos as result
* Responsive

### Javascript classes and there roles

1. App.js
	- Responsible for call all the component and act as a root/parent component.
	- Make the youtube request and hold the result in an array.
2. SearchBar.js
	- Display searchbar as a form.
	- Using props system, it will pass the term from input element to other component.
	- Make the controlled component.
3. VideoList.js
	- Pass each video to child component using map and props system.
	- Gives each video item unique key.
	- Contain only getter and setter plus on toString for display.
4. VideoItem.js
	- Structure each video as an item with image, title and desciption (Similar to YouTube).
	- Use onClick to listem for each click on video and pass the click response to parent component for display.

### Screenshot
![Image of app screen](https://github.com/TenNga/Video-Search-Engine-React/blob/master/Screenshot.jpg)
