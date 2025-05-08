# dictionay={}
# while True:
#     key=input("donner le key : ")
#     if key=="quit":
#         break
#     else:
#         val=input("donner la valeur : ")
#         dictionay[key]=val

# print(dictionay)

# def say_hello(username):
#     print(f"Hello {username}")

# name=input("donner votre nom : ")
# say_hello(name)


# def samaykom(smiya,lang):
#     if lang=="fr":
#         print(f"bonjour {smiya}")
#     elif lang=="ang":
#         print(f"hello {smiya}")
#     else:
#         print(f"This language is not supported: {smiya}")

# samaykom("oussama","ang")




# def get_formatted_name(first_name, last_name):
#     """Return a full name, neatly formatted."""
#     full_name = first_name + ' ' + last_name
#     return full_name.title()

# musician = get_formatted_name('jimi', 'hendrix') 
# print(musician)

# def upper_string(s):
#     return s.upper()

# fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]
# map_object = map(upper_string, fruit)

# print(list(map_object))




# people = ["Rick", "Morty", "Beth", "Jerry", "Snowball"]

# slm=map(lambda l:f"hello {l}",filter(lambda s:len(s)<=4,people))
# print(list(slm))