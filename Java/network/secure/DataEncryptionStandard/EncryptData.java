import java.io.*;
import java.math.*;
import java.security.*;
import java.security.interfaces.*;

public class EncryptData {
  public static void main(String[] args) throws Exception {
    KeyPairGenerator keygen = KeyPairGenerator.getInstance("RSA");
    keygen.initialize(1024);
    KeyPair kp = keygen.genKeyPair();
    PublicKey pbk = kp.getPublic();
    PrivateKey pvk = kp.getPrivate();
    FileOutputStream fout = new FileOutputStream("rsapbkey.dat");
    ObjectOutputStream oout = new ObjectOutputStream(fout);
    oout.writeObject(pbk);
    FileOutputStream foutv = new FileOutputStream("rsapvkey.dat");
    ObjectOutputStream ooutb = new ObjectOutputStream(foutv);
    ooutb.writeObject(pvk);
    RSAPublicKey rsapbk = (RSAPublicKey) kp.getPublic();
    BigInteger e = rsapbk.getPublicExponent();
    BigInteger n = rsapbk.getModulus();
    String ptext = "I have a friend!";
    byte[] pb = ptext.getBytes("UTF8");
    BigInteger m = new BigInteger(pb);
    BigInteger bi = m.modPow(e, n);
    System.out.println("bi=" + bi);
    RSAPrivateKey rsapvk = (RSAPrivateKey) kp.getPrivate();
    BigInteger nv = rsapvk.getModulus();
    BigInteger dv = rsapvk.getPrivateExponent();
    BigInteger mv = rsapvk.getModulus();
    BigInteger mm = bi.modPow(dv, mv);
    byte[] mt = mm.toByteArray();
    for (int i = 0; i < mt.length; i++)
      System.out.print((char) mt[i]);
  }
}
