#include <stdio.h>
void reverseSentence();

int main()
{
  printf("输入一个字符串: ");
  reverseSentence();

  return 0;
}

void reverseSentence()
{
  char c;
  scanf("%c", &c);

  if (c != '\n')
  {
    reverseSentence();
    printf("%c", c);
  }
}