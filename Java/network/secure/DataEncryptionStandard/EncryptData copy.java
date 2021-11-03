import java.io.*;
import java.math.*;
import java.security.*;
import java.security.interfaces.*;

public class EncryptData {
  public static void main(String[] args) throws Exception {
    // 创建一个密钥生成器对象，选择加密算法“RSA”
    KeyPairGenerator keygen = KeyPairGenerator.getInstance("RSA");
    // 初始化对象生成器,RSA密钥长度510-2048
    keygen.initialize(1024);
    // 生成密钥对
    KeyPair kp = keygen.genKeyPair();
    // 获得公钥
    PublicKey pbk = kp.getPublic();
    // 获得私钥
    PrivateKey pvk = kp.getPrivate();
    // 建立文件rsapbkey.dat输出流，保存公钥
    FileOutputStream fout = new FileOutputStream("rsapbkey.dat");
    // 建立文件对象输出流
    ObjectOutputStream oout = new ObjectOutputStream(fout);
    // 向文件rsapbkey.dat输出对象obj
    oout.writeObject(pbk);
    // 建立文件rsapvkey.dat输出流，保存私钥
    FileOutputStream foutv = new FileOutputStream("rsapvkey.dat");
    // 建立文件对象输出流
    ObjectOutputStream ooutb = new ObjectOutputStream(foutv);
    // 向文件rsapvkey.dat输出对象pvk
    ooutb.writeObject(pvk);
    // 获得公钥，计算指数e和模数n (me mod n)
    RSAPublicKey rsapbk = (RSAPublicKey) kp.getPublic();
    BigInteger e = rsapbk.getPublicExponent();
    BigInteger n = rsapbk.getModulus();
    // 明文字符串
    String ptext = "I have a friend!";
    byte[] pb = ptext.getBytes("UTF8");
    BigInteger m = new BigInteger(pb);
    // 执行计算,即加密(me mod n),返回密文
    BigInteger bi = m.modPow(e, n);
    // 显示密文
    System.out.println("bi=" + bi);
    // 获取私钥参数及解密
    RSAPrivateKey rsapvk = (RSAPrivateKey) kp.getPrivate();
    BigInteger nv = rsapvk.getModulus();
    BigInteger dv = rsapvk.getPrivateExponent();
    BigInteger mv = rsapvk.getModulus();
    // 执行计算,即解密
    BigInteger mm = bi.modPow(dv, mv);
    // 显示明文
    byte[] mt = mm.toByteArray();
    for (int i = 0; i < mt.length; i++)
      System.out.print((char) mt[i]);
  }
}
