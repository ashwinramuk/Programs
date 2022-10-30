n = int(input())
patternArr = [" "]*(1+(2*(n-1)))
patternArr[len(patternArr)//2] = "*"
i=1
while i<n:
	patternStr = "".join(patternArr)
	print(patternStr)
	patternArr[len(patternArr)//2+i] = "*"
	patternArr[len(patternArr)//2-i] = "*"
	i +=1
patternArr = ["*"]*(1+(2*(n-1)))
i = 0
while i<n:
	patternStr = "".join(patternArr)
	print(patternStr)
	patternArr[i] = " "
	patternArr[len(patternArr)-i-1] = " "
	i +=1
