from solution import duplicate_count as dc

def test_lower_letters () :
    assert dc('abcc') == 1
    assert dc('abc') == 0
    # assert dc('abbcccccc') == 2