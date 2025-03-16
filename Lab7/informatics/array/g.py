n = int(input())
arr = [int(i) for i in input().split()]
i = 1
for x in range(0, int(n / 2)):
  c = arr[x]
  arr[x] = arr[n - i]
  arr[n - i] = c
  i += 1
for x in arr:
  print(x)