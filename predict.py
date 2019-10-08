import pickle
import sys

model_file=open("model.pickle","rb")

DFC = pickle.load(model_file)

class_name={0:'setosa',1:'versicolor',2:'virginica'}

input_vector=[float(x) for x in [sys.argv[1],sys.argv[2],sys.argv[3],sys.argv[4]]]

print(class_name[DFC.predict([input_vector])[0]])