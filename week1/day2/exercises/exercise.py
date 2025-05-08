
############## ex1
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# ech=dict(zip(keys,values))
# print(ech)

############# 2
# pay=0
# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# for x,y in family.items():
#     if y<3:
#         pass
#     elif y<12:
#         pay+=10
#     else:
#         pay+=15


# print(f"total cost for the movies={pay}")
############# bonus
# pay=0
# family={}
# while True:
#     x=input("donner le nom : ")
#     if x=="quit":
#         break
#     else:
#         y=int(input("donner l'age : "))
#     family[x]=y



# for x,y in family.items():
#     if y<3:
#         pass
#     elif y<12:
#         pay+=10
#     else:
#         pay+=15


# print(f"total cost for the movies={pay}")

# #############3
# brand={
#     "name":"zara",
#     "creation_date":1975,
#     "creator_name": "Amancio Ortega Gaona",
#     "type_of_clothes": ["men", "women", "children", "home"],
#     "international_competitors": ["Gap", "H&M", "Benetton"],
#     "number_stores": 7000, 
#     "major_color": 
#         {"France": "blue", 
#         "Spain": "red", 
#         "US": {"pink",
#                 "green"
#                 }
#                 }
# }
# brand["number_stores"]=2
# clients="|".join(brand["type_of_clothes"])
# print(f"Zaras clients are : {clients}")

# brand["country_creation"]="Spain"
# if "international_competitors" in brand:
#     brand["international_competitors"].append("Desigual")
# else :
#     print("sir ghayara")

# del brand["creation_date"]
# print(brand["international_competitors"][-1])
# print(brand["major_color"]["US"])

# print(len(brand))

# for x,y in brand.items():
#     print(x)

# more_on_zara={
#     "creation_date": 1975,
#     "number_stores": 10000
# }

# brand.update(more_on_zara)
# print(brand)
# print(brand["number_stores"])


###################4
# def describe_city(city,country="maroc"):
#     print(f"{city} is in {country}")


# describe_city("madrid","spain")
# describe_city("rabat")




# #######################5
# import random
# while True:
#     num=int(input("donner un nombre entre 1 et 100 : "))
#     if num>=1 and num<100:
#         break

# ran=random.randint(1,100)
# if num==ran:
#     print("bravo ")
# else:
#     print(f"your number {num} random number {ran}")


# #######################5
