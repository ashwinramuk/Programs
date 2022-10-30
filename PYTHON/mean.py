# your code goes here
no_of_students = int(input())
mark_list = input().split(" ")
sum = 0;
for i in mark_list:
	sum += int(i)
print(sum//len(mark_list))
