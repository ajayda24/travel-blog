#include<stdio.h>
void main(){
  int size,numbers[20],i;
  int *ptr = &numbers[0];
  int max = 0;
  printf("Enter size : ");
  scanf("%d",&size);
  printf("Enter %d numbers : ",size);
  for(i=0;i<size;i++){
    scanf("%d",&numbers[i]);
  }
  for(i=0;i<size;i++){
    if(*ptr > max){
      max = *ptr;
    }
    ptr++;
  }
  printf("\nBiggest number - %d\n",max);
}