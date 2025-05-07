from datetime import datetime
date_of_birth=int(input("Enter your date of birth: "))

age=datetime.now().year-date_of_birth
p="i"*(age%10)

print(f"    _{((9-(age%10))//2)*"_"}{p}{((9-(age%10))//2)*"_"}_")
print("   |:H:a:p:p:y:|")
print(" __|___________|__")
print("|^^^^^^^^^^^^^^^^^|")
print("|:B:i:r:t:h:d:a:y:|")
print("|                 |")
print("~~~~~~~~~~~~~~~~~~~")


if (date_of_birth%4==0) and (date_of_birth%400==0 or date_of_birth%100!=0):
    print(f"    _{((9-(age%10))//2)*"_"}{p}{((9-(age%10))//2)*"_"}_")
    print("   |:H:a:p:p:y:|")
    print(" __|___________|__")
    print("|^^^^^^^^^^^^^^^^^|")
    print("|:B:i:r:t:h:d:a:y:|")
    print("|                 |")
    print("~~~~~~~~~~~~~~~~~~~")