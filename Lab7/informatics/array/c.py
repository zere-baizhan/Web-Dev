n = int(input())
arr = [int(i) for i in input().split()]
k = 0
for x in arr:
  if x > 0:
    k += 1
print(k)