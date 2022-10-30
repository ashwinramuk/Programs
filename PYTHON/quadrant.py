# your code goes here
no_of_test_cases = int(input())
quadrant_list = []
while no_of_test_cases:
    no_of_test_cases-=1
    x,y = [int(coordinate) for coordinate in input().split(" ")]
    if(x>0 and y>0):
        quadrant = "Q1"
    elif(x<0 and y>0):
        quadrant = "Q2"
    elif(x<0 and y<0):
        quadrant = "Q3"
    else:
        quadrant = "Q4"
    quadrant_list.append(quadrant)
for quadrant in quadrant_list:
    print(quadrant)


