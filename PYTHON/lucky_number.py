nums = [2, 3, 3,3, 4, 4,4]
last_num = nums[0]
count = 1
flag = True
flag2 = True
for i in range(1,len(nums)):
    if(last_num==nums[i]):
        count += 1
    else:
        if count==last_num:
            print(last_num)
            flag = False
            flag2 = False
            break
        else:
            count = 1
            last_num = nums[i]
if count==last_num and flag2:
    print(last_num)
    flag = False
    flag2 = False
elif flag2:
    print(-1)