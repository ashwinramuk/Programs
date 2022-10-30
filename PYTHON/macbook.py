no_of_macbooks = int(input())
total_span = 0
while(no_of_macbooks):
    no_of_macbooks -= 1
    life_span = int(input())
    total_span += life_span if life_span>0 else 0   
print(total_span)