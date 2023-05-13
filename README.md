# **AD410 PROJECT**

## **ABOUT**

### **Rationale Behind Changes**

- Tried to create a more flexible css scheme
- Tried to use more symantic html and css that would be easy for people to understand and change later

### **Navigating the Repo**

In the repo are 3 folders:  
**Raw**: This is the raw html/css data delivered to your browser upon loading a page from the demo site. I simply saved the pages with ctrl+s and copied the files here.  
**Formatted**: This is the **original** html/css data but I cleaned it up for readability so you can compare the original to the revised versions. I also cut the css from these pages and put it in a separate file for readability's sake.  
**Revised**: This is what the html/css should look like after my suggested changes are made. This is formatted like the *Formatted* files for easy comparison, but obviously it will resemble the *Raw* files in practice.

During all of this, some pages ended up looking slightly differently. Visit [this link](https://nickolasram.github.io/AD410Style/) so you can see how the pages look with the old and new CSS.


### **Emmet Notation**

Throughout this document I use emmet notation to define html/jsx elements. Here is a brief demo if you're not familiar with it:
- id example
    - *emmet notation*: div\#root.blue  
    - *html*: \<div id="root" class="blue"\> ... \</div\>  
    - *jsx*: \<div id="root" className="blue"\> ... \</div\>  
- class example 
    - *emmet notation*: p.dem.slash.ci2  
    - *html*: \<p class="dem slash ci2"\> ... \</p\>  
    - *jsx*: \<p  className="dem slash ci2"\> ... \</p\>  
- child example (one element nested in another)
    - *emmet notation*: div>p  
    - *html*: \<div> \<p\> ... \</p\> \</div\>  
    - *jsx*: \<div> \<p\> ... \</p\> \</div\> 
-sibling example (one element following another)
    -*emmet notation*: p+section  
    *html*: \<p\> ... \</p\> \<section\> ... \</section\>  
    *jsx*: \<p\> ... \</p\> \<section\> ... \</section\>  

## **CHANGES**

### **Implementation**



### **CSS**
The first thing you'll notice if you look at the revised css is that I inserted a lot of variables at the top. This is so elements that share the same background color, font size, margin width, etc. can all be changed by simply changing the global variables instead of having to change each css selector's rules.
Using global variables should still work if we change something like `document.getElementById(correctAnswer).style.backgroundColor = "green";` within the JavaScript to `document.getElementById(correctAnswer).style.backgroundColor = "var(--bgcolor2)";`.

I added a media query at the bottom of the css file. This is just the start of making it a responsive design.

I've tried to leave the look of the website untouched so far with one exception-- I've placed a wrapper div on every page.

### **Pages**
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
        - don't see a need for the div.username in the JS, but if there is we can just place the form tag inside it.
    - div#feedback -> div#feedback.feedback_neg
- #### continue-create.js
    - div.center -> div.wrapper_border.flex_container.centercenter
    - div.username -> form
    - p+input -> label+input
    - div.item -> section
    - div#feedback -> div#feedback.feedback_neg
- #### course-enrollments.js
    - div.center -> div.wrapper_border.flex_container.centercenter
    - div.item -> div.flex_container.split
- #### course.js
    - div.course -> div.course.border_primary
        - *to see an example of how this html/jsx should end up, look at the course-enrollments page inside the #options div*  
- #### login.js
    - div.center -> div.wrapper_border.flex_container.centercenter
    - div.item -> section
    - p+input -> label+input
    - div.username -> form
    - div#feedback -> div#feedback.feedback_neg
- ## about.js
    - div.center -> div.wrapper_border.flex_container.centercenter
    - div#welcome -> div.banner.border_primary
- ## confirmation.js
    - div.center -> div.wrapper_border.flex_container.centercenter
    - div#welcome -> div.banner.border_primary
    - wrap the buttons with a div.item
- ## enroll.js
    - div.center -> div.wrapper_border.flex_container.centercenter
    - wrap the buttons with a div.item
    - wrap form in form tag
    - replaces occurences of p in form to label
    - delete occurences of div.dropdown
- ## metrics.js
    - div.center -> div.wrapper_border.flex_container.centercenter
    - div#welcome -> div.banner.border_primary
    - div.course -> div.course.border_primary
- ## recommendations.js
    - div.center -> div.wrapper_border.flex_container.centercenter
    - div#welcome -> div.banner.border_primary
    - delete br tags
    - div#recommendations -> div.flex_container.centercenter
    - delete divs wrapping hyperlinks
    - delete div wrapping the group of hyperlinks
    - p -> p.text_narrow
        - this is specifically for the congratulations message

## **NEXT STEPS**
1. I need to finish writing "patch notes" for the rest of the pages we in our frontend repo.
    1. recommendations.js
2. Create a version "1.5" css file that is compatible with the new styling as well as the old styling, then replace the existing css files with this one.
3. Maybe finish writing a revised css scheme for other questions IF given the go-ahead as this is starting to affect the backend which is not in the original scope of our project (optional step.)
4. If time permits, we can start some basic styling and add more responsiveness


next steps for the project:
Refactor questions
I tried to make my css as flexible a system, but it may be a little complicated too (lots of vars and calcs). I figure as the style of the website is further developed and codified, the css can be simplified.
