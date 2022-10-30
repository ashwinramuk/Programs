given_input = input().split(" ")
number_of_crackers = int(given_input[0])
number_of_users = int(given_input[1])
if(number_of_crackers%number_of_users):
	print(1)
else:
	print(0)