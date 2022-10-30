# arr = input().split(" ")
# ansArr = []
# no_of_rotation = int(input("no of rotation:"))
# for i in range(len(arr)-no_of_rotation,len(arr)):
#     ansArr.append(arr[i])
# for i in range(0,len(arr)-no_of_rotation):
#     ansArr.append(arr[i])
# print(ansArr)

arr = input().split(" ")
no_of_rotation = int(input("no of rotation: "))
while(no_of_rotation):
    num = arr[len(arr)-1]
    for i in range(len(arr)):
        temp = arr[i]
        arr[i] = num
        num = temp
    no_of_rotation -= 1
print(arr)