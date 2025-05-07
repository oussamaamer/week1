string = input("Enter a string: ")
lhahout= list(string)

for i in range(1,len(string)-1):
        if len(lhahout)>i:
            if lhahout[i] == lhahout[i-1]:
                lhahout[i-1]=0
        else:
            break

j=0
while j<len(lhahout)-1:
    if lhahout[j] == 0:
        lhahout.remove(0)
    else:
        j+=1
    
result="".join(lhahout)
print(result)


