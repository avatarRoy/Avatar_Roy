package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"log"
	"net/http"
)

type MovePageInfo struct {
	Id        int
	Title     string
	ClassName string
	Content   string
}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}

func TEST(w http.ResponseWriter, r *http.Request) {
	var Id int
	var Title string
	var ClassName string
	var Content string

	db, err := sql.Open("mysql", "root:000000@/ResumeInfo")

	if err != nil {
		log.Fatal(err)
	}

	row, err := db.Query("SELECT id,Title,ClassName,Content FROM Info")

	if err != nil {
		log.Fatal(err)
	}

	w.Header().Set("Content-Type", "application/json")
	JsonArray := []*MovePageInfo{}
	for row.Next() {

		err = row.Scan(&Id, &Title, &ClassName, &Content)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Println(Id)
		fmt.Println(Title)
		fmt.Println(ClassName)
		fmt.Println(Content)
		Info := new(MovePageInfo)
		Info.Id = Id
		Info.Title = Title
		Info.ClassName = ClassName
		Info.Content = Content

		JsonArray = append(JsonArray, Info)
	}
	json.NewEncoder(w).Encode(JsonArray)

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
