import json

filename = open('top10000_revised.txt','r')
#filename = open('words_minitest.txt','r')
dataraw = filename.readlines()
filename.close()

##topwordsfile = open('top10000.txt','r')
##topwordsraw = topwordsfile.readlines()
##topwordsfile.close()

allwords = []
##topwords = []
beewords = []
data = []
allpangrams = []

num = 5
strnum = str(num)
print('making word jumble game data file with ' + strnum + ' letters in pangram')

for line in dataraw:
    data.append(line[:-1]) #ignore line break

##for line in topwordsraw:
##    topwords.append(line[:-1]) #ignore line break

print('making big list=============================')
#get all words into big list
for word in data:
    #print(word)

    allletters = [w for w in word]

    #print('all letters', allletters)

    # dedupe list of letters
    letters = []
    for w in allletters:
        if w in letters:
            pass
        else:
            letters.append(w)

    # no more than (num) possible letters
    if len(letters) > num:
        pass
    else:
        letters.sort()
        #print('sorted', letters)
        allwords.append([word, letters])

print('word list length:',len(allwords))
print('')

#find (num) letters only, look for possible answers
print('looking for answers=============================')
counter = 0
for anyword in allwords:
    #print(anyword)
    letters = [w for w in anyword[1]]
    if len(letters) == num:

        #print word every hundred words, so you can see where you are
        if counter % 100 == 0:
            print(str(counter) + 'th pangram: ' + anyword[0])
            
##        pangrams = [anyword[0]]
##        answers = [anyword[0]]
        pangrams = []
        answers = []

        for aword in allwords:
            if aword[1] == letters:
                pangrams.append(aword[0])
                #answers.append(aword[0]) #pangrams not included in answers
            elif set(aword[1]).issubset(letters): #so much faster than checking a letter at a time
                answers.append(aword[0])

        if pangrams in allpangrams:
            pass
        elif len(answers) < 10:
            pass
        else:
            beewords.append({'validPangram': pangrams, \
                             'validLetters': letters, \
                             'validAnswers':answers})
            allpangrams.append(pangrams)
            counter += 1
        
    else:
        pass

print('')
print('jumble data words length:',len(beewords))
with open('word_data_output/jumble-10k_' + strnum + '.json', 'w') as outfile:
    for words in beewords:
        json.dump(words, outfile)
        outfile.write(',\n')

print('Done')
