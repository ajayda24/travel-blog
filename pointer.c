#include<stdio.h>
void main(){
  int size,numbers[20],i,max=0;
  printf("Enter size : ");
  scanf("%d",&size);
  printf("Enter %d numbers : ",size);
  for(i=0;i<size;i++){
    scanf("%d",&numbers[i]);
  }
  for(i=0;i<size;i++){
    if(numbers[i] > max){
      max = numbers[i];
    }
  }
  printf("Biggest number - %d",max);
}