def rotate_array_clockwise(arr, m):
    while(m):
        new_num = arr[-1]
        for i in range(len(arr)):
            temp = arr[i]
            arr[i] = new_num
            new_num = temp
    m -= 1
arr = [int(num) for num in input().split(" ")]
m = int(input())
rotate_array_clockwise(arr, m)
for num in arr:
    print(num)