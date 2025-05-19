
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


# # #######################6
# def make_shirt(size,text="I love Python"):
#     print(f"size= {size} text= {text}")

# make_shirt("S")
# make_shirt(size="L")
# make_shirt(size="M")
# make_shirt(size="R",text="i love lwalida")


# # # #######################7

# import random

# def get_random_temp(season):
#     if season == "winter":
#         return round(random.uniform(-10, 16), 1)
#     elif season == "spring":
#         return round(random.uniform(10, 25), 1)
#     elif season == "summer":
#         return round(random.uniform(20, 40), 1)
#     elif season == "autumn":
#         return round(random.uniform(5, 20), 1)
#     else:
#         raise ValueError("Invalid season provided.")

# def determine_season_from_month(month):
#     if month in [12, 1, 2]:
#         return "winter"
#     elif month in [3, 4, 5]:
#         return "spring"
#     elif month in [6, 7, 8]:
#         return "summer"
#     elif month in [9, 10, 11]:
#         return "autumn"
#     else:
#         raise ValueError("Month must be between 1 and 12.")

# def main():
#     try:
#         month = int(input("Enter the month number (1-12): "))
#         season = determine_season_from_month(month)
#         temp = get_random_temp(season)
#         print(f"\nThe temperature right now is {temp} degrees Celsius.")

#         if temp < 0:
#             print("Brrr, that’s freezing! Wear some extra layers today.")
#         elif 0 <= temp < 16:
#             print("Quite chilly! Don’t forget your coat.")
#         elif 16 <= temp < 24:
#             print("Nice and mild. A sweater should be enough.")
#         elif 24 <= temp < 32:
#             print("Warm day! Enjoy the sunshine.")
#         elif temp >= 32:
#             print("It’s really hot! Stay hydrated and wear sunscreen.")
#     except ValueError as e:
#         print(f"Error: {e}")

# main()


# #########################8
# data = [
#     {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
#     {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
#     {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
#     {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
#     {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
#     {"question": "What species is Chewbacca?", "answer": "Wookiee"}
# ]

# def ask_questions():
#     correct = 0
#     incorrect = 0
#     wrong_answers = []

#     for item in data:
#         user_answer = input(item["question"] + " ").strip()
#         if user_answer.lower() == item["answer"].lower():
#             print(" Correct!\n")
#             correct += 1
#         else:
#             print(" Wrong!\n")
#             incorrect += 1
#             wrong_answers.append({
#                 "question": item["question"],
#                 "your_answer": user_answer,
#                 "correct_answer": item["answer"]
#             })

#     return correct, incorrect, wrong_answers

# def show_results(correct, incorrect, wrong_answers):
#     print(f"\nQuiz Results:\nCorrect answers: {correct}\nIncorrect answers: {incorrect}\n")

#     if wrong_answers:
#         print("🔍 Here are the questions you got wrong:")
#         for wa in wrong_answers:
#             print(f"\n {wa['question']}")
#             print(f"    Your answer: {wa['your_answer']}")
#             print(f"    Correct answer: {wa['correct_answer']}")

# def quiz():
#     while True:
#         correct, incorrect, wrong_answers = ask_questions()
#         show_results(correct, incorrect, wrong_answers)

#         if incorrect > 3:
#             print("\n You had more than 3 wrong answers. Try again!\n")
#             retry = input("Do you want to try again? (yes/no): ").strip().lower()
#             if retry != "yes":
#                 print("Goodbye!")
#                 break
#         else:
#             print("\n Well done! You passed the quiz.")
#             break


# quiz()

