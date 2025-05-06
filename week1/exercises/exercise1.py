# ex1
#print(("Hello world\n" * 4))


# # # ex2
# print(f"(99^3)*8={(99**3)*3}")





# # ex3
# nom = input("donner votre nom: ")
# if nom == "oussama":
#     print("Bonjour Oussama")
# else:
#     print("sir bhalk") 


# # # ex4
# height = int(input("donner votre taille en cm: "))
# if height > 145:
#     print("you are are tall enough to ride.")
# else:
#     print("you  need to grow some more to ride.")


# # # ex5
# my_fav_numbers ={7,10,2004,3,6,55,2022}
# my_fav_numbers.add(3)
# my_fav_numbers.add(2025)
# print(my_fav_numbers)
# friend_fav_numbers = {2017,2020,82}
# print(my_fav_numbers)
# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# print(our_fav_numbers)




# # # ex6
#Nooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo


# # # ex7
# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# basket.remove("Banana")
# basket.remove("Blueberries")
# basket.append("Kiwi")
# basket.append("Apples")
# basket.count("Apples")
# basket.clear()
# print(basket)



# # #  ex8
# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
# i=0
# while i< len(sandwich_orders):
#     if sandwich_orders[i] == "Pastrami sandwich" :
#         sandwich_orders.remove(sandwich_orders[i])
#     i+=1

# print(sandwich_orders)
# finished_sandwiches=[]
# j=0
# lenght = len(sandwich_orders)
# while j<lenght:
#     finished_sandwiches.append(sandwich_orders[0])
#     sandwich_orders.remove(sandwich_orders[0])
#     j+=1
# for sandwich in finished_sandwiches:
#     print(f"I made your {sandwich}")