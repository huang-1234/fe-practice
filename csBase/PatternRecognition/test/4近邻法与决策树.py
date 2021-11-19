# 实验四 近邻法与决策树

from sklearn import datasets
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split
from sklearn import tree
import graphviz
from sklearn.ensemble import RandomForestClassifier

#数据导入和数据处理
iris=datasets.load_iris()
target_name=iris.target_names
feature_name=iris.feature_names
X=iris.data
Y=iris.target
X_train, X_test, Y_train, Y_test = train_test_split( X, Y, test_size=0.2, random_state=0)
#print(X_train)
#print(X_test)
#print(Y_train)
#print(Y_test)
#K邻近法
print("----------K邻近法----------")
neigh = KNeighborsClassifier(n_neighbors=5)
neigh.fit(X_train,Y_train)
p1=neigh.score(X_test,Y_test)
result1=neigh.predict(X_test)
print("错误分类结果")
for i in range(len(result1)):
    if result1[i]==y_test[i]:
        continue
    else:
        print("预测结果：",result1[i],"实际结果：",y_test[i],i)
print("总测试集数",len(result1))
print("准确率",p1)

#决策树
print("----------决策树----------")
clf2 = tree.DecisionTreeClassifier(criterion='entropy') #信息熵
clf2 = clf2.fit(X_train , Y_train) #用训练的数据训练模型
p2 = clf2.score(X_test , Y_test)
result2=clf2.predict(X_test)
print("错误分类结果")
for i in range(len(result2)):
    if result2[i]==Y_test[i]:
        continue
    else:
        print("预测结果：",result2[i],"实际结果：",Y_test[i],i)
print("总测试集数",len(result2))
print("准确率",p2)

dot_data=tree.export_graphviz(clf2,feature_names=feature_name,
                     class_names=target_name,
                     filled=True,
                     rounded=True)
graph=graphviz.Source(dot_data)
#graph.view()
graph.format='png'
graph.render('decision_tree',view=True)

#随机森林
print("----------随机森林---------")
clf3 = RandomForestClassifier(max_depth=2, random_state=0)
clf3.fit(X_train , Y_train)
p3 = clf3.score(X_test , Y_test)
result3=clf3.predict(X_test)
print("错误分类结果")
for i in range(len(result3)):
    if result3[i]==y_test[i]:
        continue
    else:
        print("预测结果：",result3[i],"实际结果：",Y_test[i],i)
print("总测试集数",len(result3))
print("准确率",p3)