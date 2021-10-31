import javax.crypto.*;
import javax.crypto.spec.DESKeySpec;
import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;

/**
 * DES 工具类
 *
 * @author binbin.hou
 * @since 0.0.6
 */
public final class DesUtil {

    private DesUtil() {
    }

    /**
     * des
     *
     * @since 0.0.6
     */
    private static final String DES = "DES";

    /**
     * 加密
     *
     * @param plainText 待加密内容
     * @param password  密码
     * @return 加密结果
     * @since 0.0.6
     */
    public static byte[] encrypt(String plainText, String password) {
        byte[] bytes = plainText.getBytes();
        return encrypt(bytes, password);
    }

    /**
     * 加密
     *
     * @param plainText 待加密内容
     * @param password  密码
     * @return 加密结果
     * @since 0.0.6
     */
    public static byte[] encrypt(byte[] plainText, String password) {
        try {
            SecureRandom random = new SecureRandom();
            DESKeySpec desKey = new DESKeySpec(password.getBytes());
            // 创建一个密匙工厂，然后用它把DESKeySpec转换成
            SecretKeyFactory keyFactory = SecretKeyFactory.getInstance(DES);
            SecretKey secretKey = keyFactory.generateSecret(desKey);
            // Cipher对象实际完成加密操作
            Cipher cipher = Cipher.getInstance(DES);
            // 用密匙初始化Cipher对象
            cipher.init(Cipher.ENCRYPT_MODE, secretKey, random);
            // 现在，获取数据并加密
            // 正式执行加密操作
            return cipher.doFinal(plainText);
        } catch (Exception e) {
            throw new SecretRuntimeException(e);
        }
    }

    /**
     * 解密
     *
     * @param src      byte[]
     * @param password String
     * @return 解密结果
     * @since 0.0.6
     */
    public static byte[] decrypt(byte[] src, String password) {
        try {
            // DES算法要求有一个可信任的随机数源
            SecureRandom random = new SecureRandom();
            // 创建一个DESKeySpec对象
            DESKeySpec desKey = new DESKeySpec(password.getBytes());
            // 创建一个密匙工厂
            SecretKeyFactory keyFactory = SecretKeyFactory.getInstance(DES);
            // 将DESKeySpec对象转换成SecretKey对象
            SecretKey secretKey = keyFactory.generateSecret(desKey);
            // Cipher对象实际完成解密操作
            Cipher cipher = Cipher.getInstance(DES);
            // 用密匙初始化Cipher对象
            cipher.init(Cipher.DECRYPT_MODE, secretKey, random);
            // 真正开始解密操作
            return cipher.doFinal(src);
        } catch (InvalidKeyException | NoSuchAlgorithmException | InvalidKeySpecException | NoSuchPaddingException | IllegalBlockSizeException | BadPaddingException e) {
            throw new SecretRuntimeException(e);
        }
    }

    /**
     * 解密
     *
     * @param src      byte[]
     * @param password String
     * @return 解密结果
     * @since 0.0.6
     */
    public static String decryptToString(byte[] src, String password,
                                         String charset) {
        try {
            byte[] bytes = decrypt(src, password);

            return new String(bytes, charset);
        } catch (UnsupportedEncodingException e) {
            throw new SecretRuntimeException(e);
        }
    }

    /**
     * 解密
     *
     * @param src      byte[]
     * @param password String
     * @return 解密结果
     * @since 0.0.6
     */
    public static String decryptToString(byte[] src, String password) {
      return decryptToString(src, password, "UTF-8");
    }
    /**
     * 
     * @param args
     */
    public static void main(String[] args) {
      // 待加密内容
      String str = "测试内容";
      // 密码，长度要是8的倍数
      String password = "01234567";
      byte[] result = DesUtil.encrypt(str, password);
      System.out.println("加密后：" + HexUtil.byteToHexString(result));
      // 直接将如上内容解密
      String decryResult = DesUtil.decryptToString(result, password);
      System.out.println("解密后：" + decryResult);
  }

}