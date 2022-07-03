Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with

places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places.

```
STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
```
```
0.500000
0.333333
0.166667
```

There are positive numbers, negative numbers, and zero in the array.
The proportions of occurrence are:
```
	positive: (3/6) = 0.500000
	negative: (2/5) = 0.333333
	zeros:    (1/5) = 0.166667  
```
