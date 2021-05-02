#include <stdlib.h>
#include <time.h>
#include <iostream>
int main() {
    srand((unsigned)time(NULL));
    for (int i = 0; i < 10; ++i) {
        // srand((unsigned)time(NULL));
        int a = rand();
        std::cout << a << std::endl;
    }
}