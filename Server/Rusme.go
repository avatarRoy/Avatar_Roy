package main

import (
	"fmt"
	"log"
	"net/http"
)

func TEST(w http.ResponseWriter, r *http.Request){
	fmt.Println("TEST")
}

func main() {
	fmt.Println("TEST")
//	http.Handle("/", http.FileServer(http.Dir("../WebSide/dist")))
	http.HandleFunc("/api",TEST)
	err := http.ListenAndServe(":8080", http.FileServer(http.Dir("../WebSide/dist")))
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
