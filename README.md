# Code Snippet

In a bag, there are n identical balls (n >= 1) that needs to be removed from the bag. You can either remove one ball or two balls at a time. Write a code that, given n, calculates how many different ways you can remove the balls from the bag. Example: n = 3, result = 31 - 1 - 1, 1 - 2, 2 - 1
Example:
n = 5, result = 8
1 - 1 - 1 - 1 - 1
1 - 1 - 1 - 2
1 - 1 - 2 - 1
1 - 2 - 1 - 1
2 - 1 - 1 - 1
1 - 2 - 2
2 - 1 - 2
2 - 2 - 1
ways(n) = ways(n-1) + ways(n-2)
