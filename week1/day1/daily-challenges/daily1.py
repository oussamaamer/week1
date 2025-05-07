number=int(input("donner un nombre: "))
lenght=int(input("donner la longueur de la liste: "))
multip=[]
i=1
while i<=lenght:
    multip.append(number*i)
    i+=1

print(f"number: {number} - lenght: {lenght} -> {multip}")