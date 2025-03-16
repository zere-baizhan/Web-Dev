import re

def A():
  print("Hello, World!")

def B():
  n = int(input())
  if n % 2 == 1:
    print('Weird')
  elif n % 2 == 0 and 2 <= n <= 5:
    print('Not Weird')
  elif n % 2 == 0 and 6 <= n <= 20:
    print('Weird')
  elif n % 2 == 0 and n > 20:
    print('Not Weird')

def C():
  a = int(input())
  b = int(input())
  print(a + b)
  print(a - b)
  print(a * b)

def D():
  a = int(input())
  b = int(input())
  print(a // b)
  print(a / b)

def E():
  n = int(input().strip())
  check = {True: "Not Weird", False: "Weird"}
  print(check[
          n % 2 == 0 and (
            n in range(2, 6) or
            n > 20)
          ])

def F():
  n = int(input())
  print(*range(1, n + 1), sep='')


def G():
  n = int(input())
  list = list(set(map(int, input().strip().split(" "))))
  list.sort(True)
  print(list[1])

def H():
  x = int(input())
  y = int(input())
  z = int(input())
  n = int(input())

  print([[a, b, c] for a in range(0, x + 1) for b in range(0, y + 1) for c in range(0, z + 1) if a + b + c != n])

def I():
  s = input()
  i, c = input().split()

  print(s[:int(i)] + c + s[int(i) + 1:])

def J():
  first = input()
  last = input()
  print("Hello {0} {1}! You just delved into python.".format(first, last))