# on page load

1. randomly choose a word set
1. display validLetters in letters component 



# on user entry

1. if word is included in validAnswers array: 
	1. if word contains all validLetters
		- pangram message
		- add to userPangrams
	1. add to userAnswers array
		- should automatically render as add list
		- alphabetize userAnswrs
	1. update user score by adding word length
	1. display :) message
1. else
	1. display :( message
		
		
