package main

import (
	"fmt"
)

func main() {
	fmt.Println(ListSquared(1, 45))
	fmt.Println(ListSquared(45, 90))
}

func ListSquared(m, n int) (pairs [][]int) {
	for i := m; i <= n; i++ {
		sum := sumSquares(divisors(i))
		if isSquare(sum) {
			pairs = append(pairs, []int{i, sum})
		}
	}
	if len(pairs) < 1 {
		pairs = [][]int{}
	}
	return
}

func sumSquares(list []int) (s int) {
	for _, n := range list {
		s += n * n
	}
	return
}

func divisors(n int) (list []int) {
	for i := 1; i <= n/2; i++ {
		curr := n
		if curr%i == 0 {
			list = append(list, i)
			curr /= i
		}
	}
	list = append(list, n)
	return
}

func isSquare(n int) bool {
	for i := 1; i*i <= n; i++ {
		if i*i == n {
			return true
		}
	}
	return false
}
