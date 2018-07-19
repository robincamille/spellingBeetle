# To do


## For MVP
- Re-do word data files: there are lots of words that are way obscure. Need 6, 7, 8 letter word sets.
- Treat remote JSON file as API - done
- Load one word set from JSON file into UI - done
- Randomly choose a word set with each page refresh - done
- Hide/show rules and answers (jQuery?)  - done
- Takes user input  - done
- Evaluates answers  - done
- Scores user progress  - done
- Looks pretty  - done

## With more time
- Happy alert when high score is achieved
- Popup with score upon accepted input - sort of done, could be more visible
- In the Answers pane, mark the words that the user got
- Allow choice of 5, 6, 7, 8 letter word pangrams (change New Set button)
- Pick one special letter (this will need to happen at the data level, then need to revise button and add a Js function)
- Exclude very offensive words from data - sort of done, but need to work from a precompiled list
- Make JSON data into a "real" API
- Put the app online! 

# Challenges solved
- How to load the letters and shuffle them? - Initialize a state variable containing an array of validLetters. In App.js, define a function called shuffleLetters() and pass it to the Letters.js component so you can shuffle them there. This function uses setState to change the state variable validLetters.

Note to self, Answers does not include Pangrams
