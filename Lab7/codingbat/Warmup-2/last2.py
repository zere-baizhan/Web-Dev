def last2(str):
  if len(str) < 2:
    return 0
  last2 = str[len(str)-2:]
  k = 0
  for i in range(len(str)-2):
    sub = str[i:i+2]
    if sub == last2:
      k += 1
  return k