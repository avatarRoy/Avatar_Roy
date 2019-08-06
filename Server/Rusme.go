package main

import (
	"fmt"
	"log"
	"net/http"
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
)

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}

func TEST(w http.ResponseWriter, r *http.Request) {
	var id int
	var Title string
	var ClassName string
	var Content string
    db, err := sql.Open("mysql","root:000000@/ResumeInfo")

	if err != nil {
		log.Fatal(err)
	}

    row, err := db.Query("SELECT id,Title,ClassName,Content FROM info")

    if err != nil{
		log.Fatal(err)
	}

	for row.Next() {
		err = row.Scan(&id,&Title,&ClassName,&Content)
		if err != nil{
			log.Fatal(err)
		}
		fmt.Println(id)
		fmt.Println(Title)
		fmt.Println(ClassName)
		fmt.Println(Content)
	}

   db.Close()

}

func main() {

	http.Handle("/", http.FileServer(http.Dir("../WebSide/dist")))
	http.HandleFunc("/api/TEST", TEST)
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
