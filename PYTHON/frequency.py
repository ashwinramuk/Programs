count_store = [0]*101
arr = [4 , 5, 9, 10, 34, 10, 10, 9 , 34 ]
for elem in arr:
    count_store[elem] += 1
for i in range(1,len(count_store)):
    if(count_store[i]):
        print(f"{i}, {count_store[i]}")