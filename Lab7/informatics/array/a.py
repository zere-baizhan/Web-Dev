n = int(input())
arr = [int(i) for i in input().split()]

for x in range(n):
  if x % 2 == 0:
    print(arr[x], end=' ')