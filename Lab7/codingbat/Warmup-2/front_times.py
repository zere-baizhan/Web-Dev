def front_times(str, n):
  front_len = 3
  if front_len > len(str):
    front_len = len(str)
  front = str[:front_len]
  ans = ""
  for i in range(n):
    ans = ans + front
  return ans