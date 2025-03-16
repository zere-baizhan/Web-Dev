def f1(a, b):
  if a > b:
    return b
  else:
    return a


def min(a, b, c, d):
  return f1(f1(a, b), f1(c, d))


def A():
  a, b, c, d = [int(i) for i in input().split()]
  print(min(a, b, c, d))


def power(a, n):
  d = 1
  for x in range(1, n + 1):
    d = d * a
  print(d)


def B():
  num = input().split()
  power(float(num[0]), int(num[1]))


def xor(a, b):
  return a ^ b


def C():
  a, b = [int(i) for i in input().split()]
  print(xor(a, b))