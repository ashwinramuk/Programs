# your code goes here
given_int = int(input())
sign = 1
reverse_int = 0
if given_int<0:
	sign = -1
	given_int *= sign
while(given_int):
	reverse_int = reverse_int*10 + given_int%10
	given_int //= 10
print(reverse_int*sign)
