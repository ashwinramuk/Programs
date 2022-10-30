def transpose_matrix(mat):
	trans_mat = []
	print(trans_mat)
	for i in range(len(mat[0])):
		temp=[]
		for j in range(len(mat)):
			temp.append(mat[j][i])
		trans_mat.append(temp)
	return trans_mat


mat = [[1,2,3,1],[4,5,6,1],[7,8,9,1]]
print(transpose_matrix(mat))
