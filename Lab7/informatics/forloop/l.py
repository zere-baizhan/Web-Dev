x=int(input())  
d=0  
p=0  
while x > 0:
    last=x % 10  
    d+=last*(2**p)  
    x //= 10  
    p+=1  
print(d)  
