def array_count9(nums):
  k = 0
  for num in nums:
    if num == 9:
      k += 1
  return k