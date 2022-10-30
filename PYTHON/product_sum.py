given_int = int(input())
product = 1
sum = 0
if given_int != 0:
	while(given_int):
		product *= given_int%10
		sum += given_int%10
		given_int //= 10
	print(product-sum)
else:
	print(0)