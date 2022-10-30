s = 'GEEAAK'
n = 4
alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
countArr = [0]*26
frequencyArr = []
for ch in s:
    for i in range(26):
        if alphabet[i] == ch:
            countArr[i]+=1
            break
for i in range(26):
    if countArr[i]>1:
        frequencyArr.append((alphabet[i],countArr[i]))
print(frequencyArr[0])