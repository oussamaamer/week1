#############################1
# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    

# class Siamese(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    
    
# cat1 = Bengal("mimi", 3)
# cat2 = Chartreux("nini", 5)
# cat3 = Siamese("jiji", 2)
# all_cats=[cat1,cat2,cat3]

# sara_pets=Pets(all_cats)
# sara_pets.walk()


# #############################2
class Dog:
    
    def __init__(self,name,age,weight):
        self.name=name
        self.age=age
        self.weight=weight
        
    def bark(self):
        return self.name
    
    def run_speed(self):
        return (self.weight)/(self.age*10)
    
    def fight(self,other_dog):
        self_power=self.run_speed()*self.weight
        other_power=other_dog.run_speed()*other_dog.weight 

        if self_power > other_power:
            return f"{self.name} wins the fight against {other_dog.name}!"
        elif self_power < other_power:
            return f"{other_dog.name} wins the fight against {self.name}!"
        else:
            return f"{self.name} and {other_dog.name} are equally strong."
        

dog1=Dog("nex",10,20)
dog2=Dog("frex",10,40)
dog3=Dog("gambol",10,50)


###################################""3
