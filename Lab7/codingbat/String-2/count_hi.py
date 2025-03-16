def count_hi(str):
    k = 0
    for i in range(len(str)+1):
    if str[i:i+2] == 'hi':
        k += 1
    return k
