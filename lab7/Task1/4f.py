n = int(input())
arr = list(map(int, input().split()))
cnt = 0
for i in range(n):
    if( i > 0 and i < n-1 ): 
        if arr[i] > arr[i-1] and arr[i] > arr[i+1]: cnt+=1
    
print(cnt)