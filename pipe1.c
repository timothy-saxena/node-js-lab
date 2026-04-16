#include<stdio.h>
#include<stdlib.h>
#include<unistd.h>
#include<string.h>

int main(){
    int fd[2];
    pid_t pid;
    char write_msg[] = "Hello! from parent";
    char read_msg[];

    if(pipe(fd) == -1){
        perror("pipe creation failed";)
    }
}