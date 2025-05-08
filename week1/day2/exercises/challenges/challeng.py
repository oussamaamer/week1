dictionay={}
while True:
    key=input("donner le key : ")
    if key=="quit":
        break
    else:
        val=input("donner la valeur : ")
        dictionay[key]=val

print(dictionay)