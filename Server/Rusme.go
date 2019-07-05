package main

import (
	"fmt"
	"log"
	"net/http"
)

func TEST(w http.ResponseWriter, r *http.Request) {
	fmt.Println("TEST")
}

func main() {
	fmt.Println("TEST")
	http.Handle("/", http.FileServer(http.Dir("../WebSide/dist")))
	http.HandleFunc("/api/TEST", TEST)
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
