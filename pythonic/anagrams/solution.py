
def anagrams(word, words):
    words = (w.lower() for w in words if len(w) == len(word))
    # build dictionary
    letters = {}
    for char in word:
        if char in letters:
            letters[char] += 1
        else:
            letters[char] = 1

    l = letters.items()
    anagramsList = []

    for w in words:
        letters = {k:v for k,v in l}
        for char in w:
            if not char in letters:
                break
            if letters[char] <= 0:
                break
            letters[char]-= 1
        else:
            anagramsList.append(w)
    return anagramsList