class CLanguage:
    #类构造方法，也属于实例方法
    def __init__(self):
        self.name = "C语言中文网"
        self.add = "http://c.biancheng.net"
    # 下面定义了一个say实例方法
    def say(self):
        print("正在调用 say() 实例方法")
        print(self.name, self.add)

clang = CLanguage()
clang.say()