# About this project 

![in progress](https://img.shields.io/badge/Status-In%20progress-yellowgreen.svg)

I love the NYT's [Spelling Bee](https://www.nytimes.com/puzzles/spelling-bee) game so much that I wanted to make a game I could practice on. I call it **Spelling Beetle**. 

## To do: 
- JavaScript front end that:
	- randomly chooses a pangram word set
	- takes input
	- evaluates answers
	- scores user progress
- Add feature to display definitions, so that you can see what bonkers-sounding words like 'hobbinoll' and 'waubeen' mean
- Rank pangram difficulty according to word frequency

### Done:
- Python script to create source data files with pangrams and jumble answers (listmaker.py)
	- 5-, 6-, 7-, and 8-letter pangrams

## Word jumble data

I've included word-jumble\_5.txt (5-letter pangrams), word-jumble\_6.txt, word-jumble\_7.txt, and word-jumble\_8.txt. (Note: the formatting needs to be corrected in these files!)

### Or make it yourself
Start with a list of words. Here's what I used: [@dwyl's list of 479k words in English](https://github.com/dwyl/english-words)

In your fave text editing program: 
1. Strip out words shorter than 4 letters long
1. Strip out words with punctuation 
1. Strip out acronyms 
1. Strip out words that contain 's' (this seems to be the NYT's approach, so that word jumble answers are never boring lists of singular/plural forms

Then run your .txt file through **listmaker.py**, which will generate a .json file with *n*-letter-long pangrams and all possible answers to the word jumble. 

Sample output: 
```{
	"pangram": ["acclaimer", "calmier", "claimer", "micellar", "miracle", "reacclaim", "reclaim", "reclaimer"],
	"validLetters": ["a", "c", "e", "i", "l", "m", "r"],
	"answers": ["acclaimer", "acclaimer", "acea", "aceae",  ... "rimmer"]
}
```

## Word jumble game front end

Working on it! 
