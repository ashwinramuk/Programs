# your code goes here
arr_size = int(input())
arr=[]
for i in range(arr_size):
	arr.append(int(input()))
num_of_folds = int(input())
while num_of_folds:
    for i in range(len(arr)//2):
        arr[i] += arr[len(arr)-1]
        arr.pop()
    num_of_folds -= 1
for i in arr:
    print(i)
