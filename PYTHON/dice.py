# your code goes here
num_on_dice_top_face = int(input());
if(num_on_dice_top_face==1):
	num_on_dice_bottom_face =6
elif(num_on_dice_top_face==2):
	num_on_dice_bottom_face =5
elif(num_on_dice_top_face==3):
	num_on_dice_bottom_face =4
elif(num_on_dice_top_face==6):
	num_on_dice_bottom_face =1
elif(num_on_dice_top_face==5):
	num_on_dice_bottom_face =2
else:
	num_on_dice_bottom_face =3
print(num_on_dice_bottom_face)