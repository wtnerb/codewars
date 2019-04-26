import solution

def test_single_digit():
    assert solution.square_digits(3) == 9
    assert solution.square_digits(2) == 4
    assert solution.square_digits(4) == 16

def test_many_digits():
    tests = ((11, 11), (12, 14), (15, 125))
    for test in tests:
        assert solution.square_digits(test[0]) == test[1]
