# -*- coding: utf-8 -*-
"""
Created on Thu Apr 22 23:39:18 2021

@author: 13770
"""

import numpy as np
from cv2 import cv2 as cv
import os
import tkinter as tk
import tkinter.filedialog
from PIL import Image, ImageTk
IMAGE_SIZE = (50, 50)


def createDatabase(path):
    TrainFiles = os.listdir(path)  # 查看路径下所有文件
    Train_Number = len(TrainFiles) - 1  # 计算有几个文件（图片命名都是以 序号.jpg方式）减去Thumbs.db
    T = []
    # 把所有图片转为1-D并存入T中
    for i in range(1, Train_Number+1):
        image = cv.imread(path+'/'+str(i)+'.jpg',
                          cv.IMREAD_GRAYSCALE)  # 读取图片，并以黑白方式加载图片
        image = cv.resize(image, IMAGE_SIZE)  # 将原图像缩放到IMAGE_SIZE大小
        image = image.reshape(image.size, 1)  # 降维，转为1-D
        T.append(image)
    T = np.array(T)
    # 不能直接T.reshape(T.shape[1],T.shape[0]) 这样会打乱顺序，
    T = T.reshape(T.shape[0], T.shape[1])
    return np.mat(T).T  # 数组转换为矩阵


def PCA(T):
    m = T.mean(axis=1)  # 把均值变为0，axis=1代表对各行求均值
    A = T-m  # 去中心化
    L = (A.T)*(A)  # 协方差矩阵L = np.cov(A,rowvar = 0)
    # rowvar=0，说明传入的数据一行代表一个样本；若非0，说明传入的数据一列代表一个样本
    V, D = np.linalg.eig(L)  # 计算协方差矩阵的特征向量和特征值，V是特征值，D是特征向量
    L_eig = []
    for i in range(A.shape[1]):
        L_eig.append(D[:, i])  # 从D中取出前A.shape[1]个最大特征值对应的特征向量
    L_eig = np.mat(np.reshape(np.array(L_eig), (-1, len(L_eig))))  # 构造矩阵
    # 找到T的投影矩阵，其中每一列是一个特征向量
    eigenface = A * L_eig
    return eigenface, m, A


def recognize(testImage, eigenface, m, A):
    _, trainNumber = np.shape(eigenface)  # 将特征向量排列成变换矩阵
    projectedImage = eigenface.T*(A)  # 投影后的样本，此时每一行是一个特征向量
    # 可解决中文路径不能打开问题
    testImageArray = cv.imdecode(np.fromfile(
        testImage, dtype=np.uint8), cv.IMREAD_GRAYSCALE)
    # 转为1-D
    testImageArray = cv.resize(testImageArray, IMAGE_SIZE)
    testImageArray = testImageArray.reshape(testImageArray.size, 1)  # 降维
    testImageArray = np.mat(np.array(testImageArray))  # 构造矩阵
    differenceTestImage = testImageArray - m  # 去中心化
    projectedTestImage = eigenface.T*(differenceTestImage)  # 计算待识别人脸的投影
    distance = []
    # 计算待识别人脸与每个样本投影的距离，选出最近的那个
    for i in range(0, trainNumber):
        q = projectedImage[:, i]
        temp = np.linalg.norm(projectedTestImage - q)  # 默认二范数，求欧氏距离
        distance.append(temp)
    minDistance = min(distance)
    index = distance.index(minDistance)
    cv.imshow("result", cv.imread('D:\\Learning\\MachineLearning Expriment\\Ex_1\\TrainDatabase' +
              '/'+str(index+1)+'.jpg', cv.IMREAD_GRAYSCALE))
    cv.waitKey()  # 使程序显示出图像后暂停
    return index+1

# 进行人脸识别主程序


def example(filename):
    T = createDatabase(
        'D:\Learning\MachineLearning Expriment\Ex_1\TrainDatabase')
    eigenface, m, A = PCA(T)
    testimage = filename
    print(testimage)
    print(recognize(testimage, eigenface, m, A))

# 构建可视化界面


def gui():
    root = tk.Tk()
    root.title("人脸识别")
    root.geometry('500x460+500+200')  # 设置窗口的大小宽x高+偏移量
    # 点击选择图片时调用

    def select():
        filename = tkinter.filedialog.askopenfilename()  # 选择打开什么文件，返回文件名
        if filename != '':
            s = filename  # jpg图片文件名 和 路径。
            im = Image.open(s)
            tkimg = ImageTk.PhotoImage(im)  # 显示图片，执行此函数之前，Tk()必须已经实例化。
            l.config(image=tkimg)
            button1.config(command=lambda: example(filename))
            button1.config(text="开始识别")
            button1.place(x=250, y=400, width=100, height=50)
            # button1.pack()
            # 重新绘制
            root.mainloop()
    # 显示图片的位置
    l = tk.Label(root)
    l.pack()
    button = tk.Button(root, text="选择识别的图片", command=select)
    # button.pack()
    button.place(x=150, y=400, width=100, height=50)
    button1 = tk.Button(root)  # 开始识别按钮，刚开始不显示
    root.mainloop()


if __name__ == "__main__":
    gui()
