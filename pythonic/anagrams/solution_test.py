from solution import anagrams as a

def test_simple ():
    assert a('abba', ['aabb', 'abcd', 'bbaa', 'dada']) == ['aabb', 'bbaa']
    assert a('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) == ['carer', 'racer']