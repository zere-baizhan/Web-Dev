def string_match(a, b):
  shorter = min(len(a), len(b))
  k = 0
  for i in range(shorter-1):
    a_sub = a[i:i+2]
    b_sub = b[i:i+2]
    if a_sub == b_sub:
      k += 1
  return k