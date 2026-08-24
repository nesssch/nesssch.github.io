print("Hello, World!")
# wordf = open("words.txt", "w")
# defnf = open("defns.txt", "r")
# defns = defnf.readlines()
# print(defns)
# for defn in defns:
#     word = defn.split(" =")[0] + "\n"
#     print(word)
#     wordf.write(word)

wordf = open("words.txt", "r")
words = wordf.readlines()
# print(words)

vowels = ["a", "e", "i", "o", "u"]
consonants = ["j", "k", "l", "m", "n", "p", "s", "t", "w"]

def parse(word):
    if word[-1] == "\n":
        word = word[:-1]
        print(word)
    syllables = []
    syllable = ""
    for i in range(len(word)):
        letter = word[i]
        if syllable == "":
            syllable = letter
        elif letter in vowels:
            syllable = syllable + letter
        elif letter == "n" and (i == len(word) - 1 or (i < len(word) - 1 and word[i + 1] in consonants)):
            print("woa")
            syllable = syllable + letter
        else:
            print("noa")
            syllables.append(syllable)
            syllable = letter
    syllables.append(syllable)
    return syllables

print(parse("pan\n"))
parsed = []
for word in words:
    parsed.append(parse(word))

print(parsed)