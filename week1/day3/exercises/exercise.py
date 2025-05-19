
# ####################ex1
# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

# a=Cat("lucy",5)
# b=Cat("mimi",3)

# def find():
#     if a.age>b.age:
#         return a
#     else:
#         return b
    
# print(f"{find().name} {find().age} years old")


#########################2
# class Dog:
#     def __init__(self,name,height):
#         self.name=name
#         self.height=height
    
#     def bark(self):
#         print(f"{self.name} goes woof!")

#     def jump(self):
#         print(f"{self.name} jumps {self.height*2} cm high!")
    

    

# davids_dog=Dog("rex",50)
# print(davids_dog.name)
# print(davids_dog.height)
# davids_dog.bark()
# davids_dog.jump()
# sarahs_dog=Dog("teacup",20)
# print(sarahs_dog.name)
# print(sarahs_dog.height)
# sarahs_dog.bark()
# sarahs_dog.jump()


# if sarahs_dog.height>davids_dog.height:
#     print(sarahs_dog.name)
# else:
#     print(davids_dog.name)



# ###########################3
# class Song:
#     def __init__(self,*lyrics):
#         self.lyrics=lyrics
    
#     def sing_me_a_song(self):
#         for x in self.lyrics:
#             print(x)

# stairway= Song("There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven")
# stairway.sing_me_a_song()




# #########################################4


# class Zoo:
#     def __init__(self,zoo_name):
#         self.zoo_name=zoo_name
#         self.animals=[]
    
#     def add_animal(self,new_animal):
#         self.animals.append(new_animal)

#     def get_animals(self):
#         for x in self.animals:
#             print(x)
    
#     def sell_animal(self,animal_sold):
#         self.animals.remove(animal_sold)

#     def sort_animals(self):
#         self.a=self.animals.sort()
#         for y in self.animals:
#             print(f"{y[0].upper()} : {y}")

# new_york_zoo=Zoo("mechro3")
# new_york_zoo.add_animal("ashraf")
# new_york_zoo.add_animal("mouad")
# new_york_zoo.add_animal("as3ad")
# new_york_zoo.add_animal("oussama")
# new_york_zoo.add_animal("noussayba")
# new_york_zoo.get_animals()
# new_york_zoo.sort_animals()
