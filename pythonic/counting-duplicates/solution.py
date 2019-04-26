
def duplicate_count(s):
    seen = set()
    count = 0
    for c in s:
        if c in seen:
            count+=1
        seen.add(c)
    return count