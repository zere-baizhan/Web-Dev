n = int(input())
arr = [int(i) for i in input().split()]
for x in range(1, n):
  if arr[x] > 0 and arr[x - 1] > 0:
    print('YES')
    break
  elif arr[x] < 0 and arr[x - 1] < 0:
    print('YES')
    break
else:
  print('NO')