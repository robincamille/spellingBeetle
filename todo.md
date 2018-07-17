# To do

Note: assumption for word data: Answers does not include Pangrams

## For MVP
- Re-do word data files: there are lots of viable words not included, and lots of words that are way obscure. 
- Randomly choose a word set with each page refresh (currently hardcoded where to start)
- Hide/show rules and answers (jQuery?)  - currently commented out


## With more time
- Popup with score upon accepted input (eg, "+6") 
- In the Answers pane, mark the words that the user got
- Allow choice of 5, 6, 7, 8 letter word pangrams (change New Set button)
- Pick one special letter (this will need to happen at the data level, then need to revise button and add a Js function)
- Display answers
- Exclude very offensive words from data
- Some word sets are duplicates


# Challenges solved
- How to load the letters and shuffle them? - Initialize a state variable containing an array of validLetters. In App.js, define a function called shuffleLetters() and pass it to the Letters.js component so you can shuffle them there. This function uses setState to change the state variable validLetters.


# Reflections 
- Seems like App.js contains all the good stuff, and the components only display the HTML. No extra functions in components. App.js handles all state variables and all other functions, and all of these get passed down to the components. 
- Auto-rendering on the page is AMAZING. As soon as a state variable is changed, the page display updates.