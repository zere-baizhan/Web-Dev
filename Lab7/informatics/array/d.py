n = int(input())
k = 0
arr = [int(i) for i in input().split()]
for x in range(1, n):
  if arr[x] > arr[x - 1]:
    k += 1