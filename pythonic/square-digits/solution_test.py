import solution

def test_single_digit():
    assert solution.square_digits(3) == 9
    assert solution.square_digits(2) == 4
    assert solution.square_digits(4) == 16
