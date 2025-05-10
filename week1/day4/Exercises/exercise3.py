# ##########################"3"
# import Exercise
# import random
# class PetDog(Exercise.Dog):
#     def __init__(self,name,age,weight):
#         super().__init__(name,age,weight)
#         self.trained=False

#     def train(self):
#         print(self.bark())
#         self.trained=True

#     def play(self,*args):
#         args = ", ".join(args)
#         print(f" {args} all play together")

#     def do_a_trick(self):
#         if self.trained==True:
#             tricks = [
#                 f"{self.name} does a barrel roll.",
#                 f"{self.name} stands on his back legs.",
#                 f"{self.name} shakes your hand.",
#                 f"{self.name} plays dead."
#             ]
#             print(random.choice(tricks))

# dog1=PetDog("rex",10,20)
# dog2=PetDog("nah",11,30)
# dog3=PetDog("rok",12,40)

# dog1.play(dog1.name,dog2.name,dog3.name)
# dog3.train()
# dog3.do_a_trick()