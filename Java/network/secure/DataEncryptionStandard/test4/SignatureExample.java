package test4;

import java.security.Signature;
import java.security.SignatureException;
import java.security.KeyPair;
import java.security.KeyPairGenerator;

import sun.misc.*;

/**
 * SignatureExample
 *
 * Simple example of using a digital signature. This class creates an RSA key
 * pair and then signs the text of the first argument passed to it. It displays
 * the signature in BASE64, and then verifies the signature with the
 * corresponding public key.
 */
public class SignatureExample {

  public static void main(String[] args) throws Exception {

    if (args.length != 1) {
      System.err.println("Usage: java SignatureExample \"text to be signed\"");
      System.exit(1);
    }

    System.out.println("Generating RSA key pair...");
    KeyPairGenerator kpg = KeyPairGenerator.getInstance("RSA");
    kpg.initialize(1024);
    KeyPair keyPair = kpg.genKeyPair();
    System.out.println("Done generating key pair.");

    // Get the bytes of the data from the first argument
    byte[] data = args[0].getBytes("UTF8");

    // Get an instance of the Signature object and initialize it
    // with the private key for signing
    Signature sig = Signature.getInstance("MD5WithRSA");
    sig.initSign(keyPair.getPrivate());

    // Prepare to sign the data
    sig.update(data);

    // Actually sign it
    byte[] signatureBytes = sig.sign();

    System.out.println("\nSingature:\n" + new BASE64Encoder().encode(signatureBytes));

    // Now we want to verify that signature. We'll need to reinitialize
    // our Signature object with the public key for verification. This
    // resets the signature's data, so we'll need to pass it in on update.
    sig.initVerify(keyPair.getPublic());

    // Pass in the data that was signed
    sig.update(data);

    // Verify
    boolean verified = false;
    try {
      verified = sig.verify(signatureBytes);
    } catch (SignatureException se) {
      verified = false;
    }

    if (verified) {
      System.out.println("\nSignature verified.");
    } else {
      System.out.println("\nSignature did not match.");
    }
  }
}