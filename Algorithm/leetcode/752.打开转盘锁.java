import java.util.HashSet;
import java.util.Set;

/*
 * @lc app=leetcode.cn id=752 lang=java
 *
 * [752] 打开转盘锁
 */

// @lc code=start
class Solution {

    String plusOne(String s, int j){
      char [] ch = s.toCharArray();
      if(ch[j] == '9'){
        ch[j] = '0';
      }else{
        ch[j] += 1;
      }
      return new String(ch);
    }
    String minusOne(String s, int j){
      char [] ch = s.toCharArray();
      if(ch[j] == '0'){
        ch[j] = '9';
      }else{
        ch[j] -= 1;
      }
      return new String(ch);
    }
    public int openLock(String[] deadends, String target) {
      Set<String> deads = new HashSet<>();
      for(String s: deadends){
        deads.add(s);
      }
      // 记录已经穷举过的密码，防止走回头路
      Set<String> visited = new HashSet<>();
      Queue<String> q = new LinkdList<>();
      int step = 0;
      q.offer("0000");
      visited.add("0000");
      while(!q.isEmpty()){
        int sz = q.size();
        for(int i=0; i<sz; i++){
          String cur = q.poll();
          if(deads.contains(cur)){
            continue;
          }
          if(cur.equals(target)){
            return step;
          }
          // 将一个节点的未遍历相邻节点加入队列
          for(int j=0; i<4; j++){
            String up = plusOne(cur, j);
            String down = minusOne(cur, j);
            q.offer(up);
            q.offer(down);
          }
        }
        step++;
      }
      return -1;
    }
}
// @lc code=end

