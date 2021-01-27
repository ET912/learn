package main

import (
	"fmt"

	"github.com/ET912/learn/algorithm/compare"
	"github.com/ET912/learn/algorithm/gosort"
)

func main() {
	y := []compare.Int{
		{Value: 2},
		{Value: 4},
		{Value: 2},
		{Value: 7},
		{Value: 9},
	}
	x := make(gosort.SortAble, len(y))
	for i, c := range y {
		x[i] = c
	}
	z := x.Sort(gosort.MergeSort)
	fmt.Printf("%v", z)
}
