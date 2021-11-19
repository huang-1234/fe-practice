
# 1、数据预处理。载入数据文件（iris.csv文件）中的数据，并将其分成样本向量矩阵X和样本分类结果向量G。
iris=datasets.load_iris()
X = iris.data
print(x)
G=iris.target
#print(G)
iris=np.column_stack((X,G))
#print(iris)

# 2、给4列向量的X在最前增加一列常数1，得到增广向量y（公式4-39）。定义增广权向量α（公式4-40），取各项初值为1。
H=np.ones_like(X[: ,0: 1])    #将数组的第一列值变为1
G=np.transpose(G)   # 遮换数组的行列值的索引这
#print(G)
y=np.transpose(np.column_stack((H,X)))    #将两个矩阵合并，增广向量
print(y)
a0=np.ones_like(y[ : ,0:1])   #权向量初值
#print(a0)

# 根据错分惩罚的感知器准则函数原理设计感知器
train0=y[:,G==0][:,:40]
#print(train0)
test0 = y[:,G==0][:,40:]
train1 = y[:,G==1][:,:40]
test1 = y[:,G==1][:,40:]
train2 = y[:,G==2][:,:40]
test2 = y[:,G==2][:,40:]



# 结构程序设计
import numpy as np
from sklearn import datasets

iris=datasets.load_iris()
X=iris.data
#print(X)
G=iris.target
#print(G)
iris=np.column_stack((X,G))
#print(iris)
H=np.ones_like(X[:,0:1])#将数组的第一列值变为1
G=np.transpose(G)#调换数组的行列值的索引值
#print(G)
y=np.transpose(np.column_stack((H,X)))   #将两个矩阵合并，增广向量
#print(y)
a0=np.ones_like(y[:,0:1]) #权向量初值
#print(a0)

train0=y[:,G==0][:,:40]
#print(train0)
test0 = y[:,G==0][:,40:]
train1 = y[:,G==1][:,:40]
test1 = y[:,G==1][:,40:]
train2 = y[:,G==2][:,:40]
test2 = y[:,G==2][:,40:]

#第一次训练
train01=np.column_stack((train0,np.column_stack((train1,train2))))
a1=a0
#print(a1)
p=1  #步长设为1
step=0  #修改次0
for j in range(5):
    for i in range(120):
        if(i<40):
            y1 = train01[:,i:i+1]
        else:
            y1 = -train01[:,i:i+1]
        k = np.dot(np.transpose(a1),y1)
        if k <= 0:
            step = step+1
            print("第一次训练的第{}次修改".format(step))
            a1 = a1+(p*y1)
            print(a1)

#30个测试样本
test01=np.column_stack((test0,np.column_stack((test1,test2))))
mis=0
for i in range(30):
    g=np.dot(np.transpose(a1),test01[:,i:i+1])
    if(g<0):
        if(i<10):
            mis=mis+1
            print("类1被错分")
    else:
        if(i>=10):
            mis=mis+1
            print("判断是类{},被分到类1".format((i+1)//10+1))
print("错误率为：{}".format(mis/30))

#第二次训练
train02=np.column_stack((train1,train2))
#print(train02)
a2=a0
p=1  #步长设为1
step=0  #修改次数
for j in range(5):
    for i in range(80):
        if(i<40):
            y2=train02[:,i:i+1]
        else:
            y2=-train02[:,i:i+1]
        k=np.dot(np.transpose(a2),y2)
        if k<=0:
            step=step+1
            print("第二次训练的第{}次修改".format(step))
            a2=a2+(p*y1)
            print(a2)

#30个测试样本
test02=np.column_stack((test1,test2))
mis=0
for i in range(20):
    g=np.dot(np.transpose(a2),test02[:,i:i+1])
    if(g<0):
        if(i<10):
            mis=mis+1
            print("类2被错分")
    else:
        if(i>=10):
            mis=mis+1
            print("判断是类{}，被分到类2".format((i+1)//10+1))
print("错误率为：{}".format(mis/20))
'''