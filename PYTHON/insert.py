arr = input().split(" ")
idx = int(input())
num = int(input())
for i in range(idx, len(arr)):
    temp = arr[i]
    arr[i] = num
    num = temp
arr.append(num)
print(arr)
