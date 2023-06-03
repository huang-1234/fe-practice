class Solution {
  public List<Integer> busiestServers(int k, int[] arrival, int[] load) {
      TreeSet<Integer> available = new TreeSet<Integer>();
      for (int i = 0; i < k; i++) {
          available.add(i);
      }
      PriorityQueue<int[]> busy = new PriorityQueue<int[]>((a, b) -> a[0] - b[0]);
      int[] requests = new int[k];
      for (int i = 0; i < arrival.length; i++) {
          while (!busy.isEmpty() && busy.peek()[0] <= arrival[i]) {
              available.add(busy.poll()[1]);
          }
          if (available.isEmpty()) {
              continue;
          }
          Integer p = available.ceiling(i % k);
          if (p == null) {
              p = available.first();
          }
          requests[p]++;
          busy.offer(new int[]{arrival[i] + load[i], p});
          available.remove(p);
      }
      int maxRequest = Arrays.stream(requests).max().getAsInt();
      List<Integer> ret = new ArrayList<Integer>();
      for (int i = 0; i < k; i++) {
          if (requests[i] == maxRequest) {
              ret.add(i);
          }
      }
      return ret;
  }
}
