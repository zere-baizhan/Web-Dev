n = int(input())
arr = [int(i) for i in input().split()]
k = 0
for x in range(1, n - 1):
  if arr[x] > arr[x - 1] and arr[x] > arr[x + 1]:
    k += 1
print(k)
