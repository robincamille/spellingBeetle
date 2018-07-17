# About this project 

![in progress](https://img.shields.io/badge/Status-In%20progress-yellowgreen.svg)

I love the NYT's [Spelling Bee](https://www.nytimes.com/puzzles/spelling-bee) game so much that I wanted to make a game I could practice on. I call it **Spelling Beetle**. 

## Project deliverables
JavaScript front end that:
- randomly chooses a pangram word set (done)
- takes input (done)
- evaluates answers (done)
- scores user progress (done)
- looks pretty
	
### Future features
- Add 6-, 7-, and 8-letter pangram word set choices
- Add feature to display definitions, so that you can see what bonkers-sounding words like 'hobbinoll' and 'waubeen' mean
- Rank pangram difficulty according to word frequency

### Make word lists yourself
Start with a list of words. I used [NLTK's 200k word list](http://www.nltk.org/).

In your fave text editing program: 
1. Strip out words shorter than 4 letters long
1. Strip out words with punctuation 
1. Strip out words beginning with a capital letter
1. Strip out acronyms (might have been accomplished by previous step)
1. Optional: Strip out words that contain 's' (this seems to be the NYT's approach, so that word jumble answers are never boring lists of singular/plural forms

Then run your .txt file through **listmaker.py**, which will generate a .json file with *n*-letter-long pangrams and all possible answers to the word jumble. 

Sample output: 
```
wordSet = [
	{
	"validLetters": ["e", "j", "k", "r", "y"], 
	"validPangram": ["jerky"], 
	"validAnswers": ["eker", "eyer", ... "yerk"]
	},
]
```

## Wireframe

![Wireframe](wireframe.jpg)
