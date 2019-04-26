
def duplicate_count(s):
    seen = {}
    count = 0
    for c in s:
        if c in seen and seen[c]:
            count+=1
            seen[c] = False
        if not c in seen:
            seen[c] = True
    return count