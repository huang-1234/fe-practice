MOV AL,01100101B;
MOV BL,11011010B;
XOR DX,DX;两个值相同，异或结果为0。等效：MOV DX,0
MOV CX,8;count
L1:
 SHR AL,1;逻辑右移,左边补0,  00110010B
 RCR DX,1;带进位循环右移，右端被舍弃掉的补回左端。
 SHR BL,1;右移
 RCR DX,1;右移；
 LOOP L1

 ;AL的1被移出，送入CF中
 ;DX的左端被CF填入，然后右端0送入CF中；
 ;BL的0被移出，送入CF中
 ;DX的左端被CF填入，然后右端0送入CF中；
 ;至此，一个循环结束，进行八次循环完成数据转移
