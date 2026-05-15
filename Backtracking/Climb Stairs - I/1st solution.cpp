#include<bits/stdc++.h>
using namespace std;

void f(int cur, int n, vector<int>& nums){
  if(cur==n){
    for(int i=0;i<nums.size();i++){
      cout<<nums[i]<<" ";
    }
    cout<<endl;
    return;
  }
  if(cur>n){
    return;
  }
  nums.push_back(1);
  f(cur+1, n, nums);
  nums.pop_back();
  nums.push_back(2);
  f(cur+2, n, nums);
  nums.pop_back();
}

int main() {
  int n;
  cin>>n;
  vector<int> nums;
  f(0, n, nums);
  return 0;
}