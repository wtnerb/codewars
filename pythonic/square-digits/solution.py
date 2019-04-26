def square_digits1(num):
    s = str(num)
    o = []
    for digit in s:
        o.append(str(int(digit)**2))
    return int(''.join(o))

def square_digits2(num):
    return int(''.join([str(int(digit) **2) for digit in str(num)]))

def square_digits(num):
    return square_digits2(num)