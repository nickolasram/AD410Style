# **AD410 PROJECT**

## **ABOUT**

### **Rationale Behind Changes**

- Tried to create a more flexible css scheme
- Tried to use more symantic html and css that would be easy for people to understand and change later

### **Navigating the Repo**

In the repo are 3 folders:  
**Raw**: This is the raw html/css data delivered to your browser upon loading a page from the demo site. I simply saved the pages with ctrl+s and copied the files here.  
**Formatted**: This is the original html/css data but I cleaned it up for readability so you can compare the original to the revised versions. I also cut the css from these pages and put it in a separate file for readability's sake.  
**Revised**: This is what the html/css should look like after my suggested changes are made. This is formatted like the *Formatted* files for easy comparison, but obviously it will resemble the *Raw* files in practice.


### **Emmet Notation**

Throughout this document I use emmet notation to denote html/jsx elements. Here is a brief demo if you're not familiar with it:

*emmet notation*: div\#root.blue  
*html*: \<div id="root" class="blue"\> ... \</div\>  
*jsx*: \<div id="root" className="blue"\> ... \</div\>  

*emmet notation*: p.dem.slash.ci2  
*html*: \<p class="dem slash ci2"\> ... \</p\>  
*jsx*: \<p  className="dem slash ci2"\> ... \</p\>  

*emmet notation*: div>p  
*html*: \<div> \<p\> ... \</p\> \</div\>  
*jsx*: \<div> \<p\> ... \</p\> \</div\> 

## **CHANGES**

### **Implementation**

Some changes will involve editing the jsx within the .js files in the src/pages and src/pages/onboarding folders. Other changes will have to be implemented in the back end. For example, if you go to the [main CulturalCSBytes Repo](https://github.com/lgtanimoto/CulturalCSBytes), within the [/content/A000/ folder](https://github.com/lgtanimoto/CulturalCSBytes/tree/main/content/A000), you'll find the json for all the questions. In [this specific file](https://github.com/lgtanimoto/CulturalCSBytes/blob/main/content/A000/A000/A000-A000-1D06-0.json), you'll find a span.qname element; I would suggest changing that to a b.highlight1 element.

### **CSS**
The first thing you'll notice if you look at the revised css is that I inserted a lot of variables at the top. This is so elements that share the same background color, font size, margin width, etc. can all be changed by simply changing the global variables instead of having to change each css selector's rules.
Using global variables should still work if we change something like `document.getElementById(correctAnswer).style.backgroundColor = "green";` within the JavaScript to `document.getElementById(correctAnswer).style.backgroundColor = "var(--bgcolor2)";`.

I added a media query at the bottom of the css file. This is just the start of making it a responsive design.

I've tried to leave the look of the website untouched so far with one exception-- I've placed a wrapper div on every page.

### **Pages**
*.js files are React files, .json files are backend files that contain the questions' html*  
*an arrow (->) is shorthand for "update to/replace with"*
- #### home.js
    - div.center -> div.wrapper_border.flex_container.centercenter
    - div#welcome -> div.banner.border_primary
    - wrap the buttons with a div.item
- #### questions.js
    - div#Questions -> div.wrapper_border
        - unless the div's id is important for the JavaScript in a way I'm not seeing. If it is then div#Questions -> div#Questions.wrapper_border
    - div#welcome -> div.banner.outline_primary
        - same caveat applies here as the note before
    - don't see a reason for the Answer class on all the divs. Perhaps it's there for future styling. May be able to delete.
    - replace occurances of `.style.backgroundColor = "green";` with `.style.backgroundColor = "var(--highlight-tertiary)";`
    - replace occurances of `.style.backgroundColor = "red";` with `.style.backgroundColor = "var(--highlight-primary)";`
    - replace occurances of `.style.backgroundColor = "white";` with `.style.backgroundColor = "var(--button-primary)";`
- #### create.js
    - div.center -> div.wrapper_border.flex_container.centercenter
    - div.item -> section
    - p+input -> label+input
    - div.username -> form
    - div#feedback -> div#feedback.feedback_neg
- #### login.js
    - div.center -> div.wrapper_border.flex_container.centercenter
    - div.item -> section
    - p+input -> label+input
    - div.username -> form
    - div#feedback -> div#feedback.feedback_neg
- #### A000-A000-1A14-0.json
    - span.qname -> b.highlight1
    - div.code -> section.code
    - delete br tags
    - div.ci8 -> p.ci8.clumped
    - wrap all the numbers in the example with a code tag
    - p.qimg -> figure.image
    - img#qimg0.qimg -> img#qimg0
    - em -> b.highlight2
    - span.code -> code

## **NEXT STEPS**
1. I need to finish writing "patch notes" for the rest of the pages we in our frontend repo.
    1. confirmation.js
    2. course-enrollments.js
    3. course.js
    4. enroll.js
<<<<<<< Updated upstream
    5. login.js
        - login.js - error
    6. metric.js
    7. metrics.js
    8. recommendations.js
    9. about.js
=======
    5. metric.js
    6. metrics.js
    7. recommendations.js
>>>>>>> Stashed changes
2. Create a version "1.5" css file that is compatible with the new styling as well as the old styling, then replace the existing css files with this one.
3. Maybe finish writing a revised css scheme for other questions IF given the go-ahead as this is starting to affect the backend which is not in the original scope of our project (optional step.)
4. If time permits, we can start some basic styling and add more responsiveness
