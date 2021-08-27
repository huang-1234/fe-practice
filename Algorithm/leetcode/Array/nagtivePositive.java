package Array;

public class nagtivePositive {
  public void reOrderArray(int[] array) {
    Stack<Integer> s = new Stack<Integer>();
    int l = array.length;
    for (int i = 0; i < l; i++) {
      if (array[i] % 2 == 1) {
        s.push(array[i]);
      }
    }
    for (int j = 0; j < l; j++) {
      if (array[j] % 2 == 0) {
        s.push(array[j]);
      }
    }
    for (int k = l - 1; k >= 0; k--) {
      array[k] = s.pop();
    }
  }

  public void OrderArray(int []array){
    int len = array.length;
    for (int i = 0; i < len-1;  i++){
      for (int j = 0; j < len - 1 - i; j++) {
        if (array[j] % 2 == 0 && array[j + 1] % 2 == 1) {
          int t = array[j];
          array[j] = array[j + 1];
          array[j + 1] = t;
        }
      }
    }
  }
}
