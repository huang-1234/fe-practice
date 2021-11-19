# 1readDataFromIris.csv
import pandas as pd
import numpy as np
from math import log
from math import e
#完成数据导入的操作
cl = cl1 = pd.read_csv('iris.csv',
		usecols=['sepal_length','sepal_width','petal_length', 'petal_width'])
print(cl1)
#转换成数组
al = cl.to_numpy()
print(al)
sum = 0
aver = 0
al1 = al[:41][:]
print("-------------------每一列数据的全部均值---------------")
for i in range(40):
	sum += al1[i]
aver0 = sum / 40.0
print(aver0)
print("-------------------协方差矩阵---------------------")
cov0 = np.cov(al1.T)
print(cov0)
print("-------------------协方差矩阵的逆矩阵---------------")
inv0 = np.linalg.inv(cov0)
print(inv0)
print("--------species = setosa的协方差矩阵的行列式--------")
det0 = np.linalg.det(cov0)
print(det0)

#species = versicolor
print()
print("species = versicolor")
al1 = al[50:91][:]
print("------------------均值----------------------")
for i in range(40):
	sum += al1[i]
aver1 = sum / 40.0
print(aver1)
print("------------------协方差矩阵----------------")
cov1 = np.cov(al1.T)
print(cov1)
print("------------------协方差矩阵的逆矩阵--------")
inv1 = np.linalg.inv(cov1)
print(inv1)
print("------------------协方差矩阵的行列式--------")
det1 = np.linalg.det(cov1)
print(det1)

#species = virginica
print()
print("species = virginica")
al2 = al[100:141][:]
#print(al2)
print("------------------均值----------------------")
for i in range(40):
	sum += al2[i]
aver2 = sum / 40.0
print(aver2)
print("------------------协方差矩阵----------------")
cov2 = np.cov(al2.T)
print(cov2)
print("------------------协方差矩阵的逆矩阵--------")
inv2 = np.linalg.inv(cov2)
print(inv2)
print("------------------协方差矩阵的行列式--------")
det2 = np.linalg.det(cov2)
print(det2)

x=np.transpose(al[149:150][:])

p0=0.4
p1=0.4
p2=0.4
#判别式g0
def g0(x):
    W=-(1/2)*inv0
    w=np.dot(inv0,aver0)
    w0=-(1/2)*np.dot(np.dot(np.transpose(aver0),inv0),aver0)-(1/2)*log(e,det0)+log(e,p0)
    g=np.dot(np.dot(np.transpose(x),W),x)+np.dot(np.transpose(w),x)+w0
    return g

#判别式g0
def g1(x):
    W=-(1/2)*inv1
    w=np.dot(inv1,aver1)
    w0=-(1/2)*np.dot(np.dot(np.transpose(aver1),inv1),aver1)-(1/2)*log(e,det1)+log(e,p1)
    g=np.dot(np.dot(np.transpose(x),W),x)+np.dot(np.transpose(w),x)+w0
    return g

#判别式g2
def g2(x):
    W=-(1/2)*inv2
    w=np.dot(inv2,aver2)
    w0=-(1/2)*np.dot(np.dot(np.transpose(aver2),inv2),aver2)-(1/2)*log(e,det2)+log(e,p2)
    g=np.dot(np.dot(np.transpose(x),W),x)+np.dot(np.transpose(w),x)+w0
    return g

result0=[]
result1=[]
result2=[]

"第0类的后十个"
for i in range(10):
    x=np.transpose(al[40+i:40+i+1][:])
    a=[g0(x),g1(x),g2(x)]
    result0.append(a.index(max(g0(x),g1(x),g2(x))))
print("---------------第1类的后十个---------------")
print(result0)

"第1类的后十个"
for i in range(10):
    x=np.transpose(al[100+i:100+i+1][:])
    a=[g0(x),g1(x),g2(x)]
    result1.append(a.index(max(g0(x),g1(x),g2(x))))
print("---------------第2类的后十个---------------")
print(result1)

"第2类的后十个"
for i in range(10):
    x=np.transpose(al[140+i:140+i+1][:])
    a=[g0(x),g1(x),g2(x)]
    result2.append(a.index(max(g0(x),g1(x),g2(x))))
print("---------------第3类的后十个---------------")
print(result2)