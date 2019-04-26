from solution import duplicate_count as dc

def test_lower_letters ():
    assert dc('abcc') == 1
    assert dc('abc') == 0
    assert dc('abbcccccc') == 2

def test_mixed_case_letters ():
    assert dc('Abc') == 0
    assert dc('Abca') == 1
    assert dc('AbBca') == 2

def test_non_alphanumeric ():
    assert dc('Abc1##') == 0
    assert dc('Ab_ca') == 1
    assert dc('Ab Bc\'a %$#@@#$%^&^%$#') == 2