package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	fmt.Println("TEST")
	http.Handle("/", http.FileServer(http.Dir("../WebSide/dist")))
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
