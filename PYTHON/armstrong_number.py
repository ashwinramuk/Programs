num = int(input())
given_num = num
cubic_sum = 0
while(num):
	cubic_sum += (num%10)**3
	num = num//10;
if cubic_sum==given_num:
	print("YES")
else:
	print("NO")