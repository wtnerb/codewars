from solution import anagrams as a

def test_simple ():
    assert a('abba', ['aabb', 'abcd', 'bbaa', 'dada']) == ['aabb', 'bbaa']
    