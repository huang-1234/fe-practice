# 2BayesianEstimation
import numpy as np
import matplotlib.pyplot as plt
import math
plt.rcParams['font.sans-serif'] = ['SimHei'] # 用来显示中文标签

N = 1000
u = 3.6
s = 1
np.random.seed(10)
X = np.random.normal(loc=u, scale=s, size=N)

Mn = X.mean() # 所有观测样本的算术平均
print("所有观测样本的算术平均")
print(Mn)


u0 = 0.0
s0 = 0.5
print("样本均值的贝叶斯估计量")
un = (N*(s0**2)/(N*(s0**2) + (s**2))) * Mn  + ( (s**2) / (N*(s0**2) + s**2) )
print(un)
#dn=((s0**2)*(s**2))/(N*(sO**2)+(s**2))
#sn=d1**(1/2)



# 3、使用贝叶斯学习的方法，通过多次迭代，估计并调整贝叶斯估计值——样本均值，并通过matplotlib库绘制该估计值的演变过程。

#第一次迭代
print("第一次迭代的贝叶斯估计值，样本数为10")N=10
Mn=X[0:10].mean()
u1=(N*(s0**2)/(N*(sO**2)+(s**2)))*Mn+((s**2)/(N*(s0**2)+(s**2)))*uOprint(u1)
d1=((s0**2)*(s**2))/(N*(s0**2)+(s**2))s1=d1**(1/2)
#第二次迭代
print("第二次迭代的贝叶斯估计值，样本数为100")N=108
Mn=X[0:100].mean( )
u2=(N*(s1**2)/(N*(s1**2)+(s**2)))*Mn+((s**2)/(N*(s1**2)+(s**2)))*u1print(u2)
d2=((s1**2)*(s**2))/(N*(s1**2)+(s**2))s2=d2**(1/2)
#第三次迭代
print("第三次迭代的贝叶斯估计值，样本数为250")N=250
Mn=X[ 0: 250].mean()
u3=(N*(s2**2)/(N*(s2**2)+(s**2)))*Mn+((s**2)/(N*(s2*2)+(s**2)))*u2print(u3)
d3=((s2**2)*(s**2))/(N*(s2**2)+(s**2))s3=d3**(1/2)
#第四次迭代
print("第四次迭代的贝叶斯估计值，样本数为500")N=508
Mn=X[0: 500].mean()
u4=(N*( s3**2)/(N*(s3**2)+(s**2)))*Mn+((s**2)/(N*(s3**2)+(s**2)))*u3print(u4)
d4=((s3**2)*(s**2))/(N*(s3**2)+(s**2))s4=d4**(1/2)


# 4、调整上述步骤中指定的参数，重复实验，观察结果。
#第五次迭代
print("第五次迭代的贝叶斯估计值，样本数为1800")
N=1000
Mn=X[0: 1000].mean()
u5=(N*(s4**2)/(N*(s4**2)+(s**2)))*Mn+((s**2)/(N*(s4**2)+(s**2)))*u4
print(u5)
d5=((s4**2)*(s**2))/(N*(s4**2)+(s**2))
s5=d5**(1/2)




# 四、结构程序设计

import numpy as np
import matplotlib.pyplot as plt
import math
plt.rcParams['font.sans-serif'] = ['SimHei']  # 用来正常显示中文标签

N=1000   #样本数量
u=3.6   #样本均值
s=1     #样本标准差
np.random.seed(10)
X=np.random.normal(loc=u,scale=s,size=N)

Mn=X.mean()  #所有观测样本的算术平均
print("所有观测样本的算术平均")
print(Mn)
u0=0.0
s0=0.5
print("样本均值的贝叶斯估计量")
un=(N*(s0**2)/(N*(s0**2)+(s**2)))*Mn+((s**2)/(N*(s0**2)+(s**2)))*u0
print(un)
#dn=((s0**2)*(s**2))/(N*(s0**2)+(s**2))
#sn=d1**(1/2)

#第一次迭代
print("第一次迭代的贝叶斯估计值，样本数为10")
N=10
Mn=X[0:10].mean()
u1=(N*(s0**2)/(N*(s0**2)+(s**2)))*Mn+((s**2)/(N*(s0**2)+(s**2)))*u0
print(u1)
d1=((s0**2)*(s**2))/(N*(s0**2)+(s**2))
s1=d1**(1/2)
#第二次迭代
print("第二次迭代的贝叶斯估计值，样本数为100")
N=100
Mn=X[0:100].mean()
u2=(N*(s1**2)/(N*(s1**2)+(s**2)))*Mn+((s**2)/(N*(s1**2)+(s**2)))*u1
print(u2)
d2=((s1**2)*(s**2))/(N*(s1**2)+(s**2))
s2=d2**(1/2)
#第三次迭代
print("第三次迭代的贝叶斯估计值，样本数为250")
N=250
Mn=X[0:250].mean()
u3=(N*(s2**2)/(N*(s2**2)+(s**2)))*Mn+((s**2)/(N*(s2**2)+(s**2)))*u2
print(u3)
d3=((s2**2)*(s**2))/(N*(s2**2)+(s**2))
s3=d3**(1/2)
#第四次迭代
print("第四次迭代的贝叶斯估计值，样本数为500")
N=500
Mn=X[0:500].mean()
u4=(N*(s3**2)/(N*(s3**2)+(s**2)))*Mn+((s**2)/(N*(s3**2)+(s**2)))*u3
print(u4)
d4=((s3**2)*(s**2))/(N*(s3**2)+(s**2))
s4=d4**(1/2)
#第五次迭代
print("第五次迭代的贝叶斯估计值，样本数为1000")
N=1000
Mn=X[0:1000].mean()
u5=(N*(s4**2)/(N*(s4**2)+(s**2)))*Mn+((s**2)/(N*(s4**2)+(s**2)))*u4
print(u5)
d5=((s4**2)*(s**2))/(N*(s4**2)+(s**2))
s5=d5**(1/2)

def normal_distribution(x, mu, sigma):
    return np.exp( -1 * ( (x-mu) ** 2) / ( 2 * (sigma ** 2)) ) / (math.sqrt( 2 * np.pi ) * sigma)
x1 = np.linspace( u1 - 3 * s1, u1 + 3 * s1, 100000)
y1 = normal_distribution(x1, u1, s1)
plt.plot(x1, y1, 'b')

x2 = np.linspace( u2 - 3 * s2, u2 + 3 * s2, 100000)
y2 = normal_distribution(x2, u2, s2)
plt.plot(x2, y2, 'r')

x3 = np.linspace( u3 - 3 * s3, u3 + 3 * s3, 100000)
y3 = normal_distribution(x3, u3, s3)
plt.plot(x3, y3, 'y')

x4 = np.linspace( u4 - 3 * s4, u4 + 3 * s4, 100000)
y4 = normal_distribution(x4, u4, s4)
plt.plot(x3, y3, 'm')

x5 = np.linspace( u5 - 3 * s5, u5 + 3 * s5, 100000)
y5 = normal_distribution(x5, u5, s5)
plt.plot(x5, y5, 'k--')
plt.title("贝叶斯估计值的变化")
plt.legend()
plt.grid()
plt.show()