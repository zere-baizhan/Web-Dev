def string_bits(str):
  ans = ""
  for i in range(len(str)):
    if i % 2 == 0:
      ans = ans + str[i]
  return ans
  