package main

import (
	"crypto/rand"
	"encoding/base64"
	"database/sql"
	"encoding/json"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"log"
	"net/http"
//	"strings"
	"sync"
	"time"
)

type MovePageInfo struct {
	Title     string
	ClassName string
	Content   string
}

type User struct {
	ExpireTime int
	Logout     bool
}

var Info = make(map[string]User)
var wg sync.WaitGroup
var mu sync.Mutex


func main(){
	fmt.Println("Start")
	wg.Add(2)
	go StartServer()
	go ExpireCount()
	wg.Wait()
}

func CreateUserSession(Session string){

	UserDetial := new(User)
	UserDetial.ExpireTime = 60
	UserDetial.Logout = false
	Info[Session] = *UserDetial

}

func ExpireCount() {
	for true {
		mu.Lock()
		for i, UserInfo := range Info {
			if UserInfo.Logout == false && UserInfo.ExpireTime > 0 {
				fmt.Println("UserName : ", i, "Expire : ", UserInfo.ExpireTime)
				UserInfo.ExpireTime = UserInfo.ExpireTime - 1
				Info[i] = UserInfo
			} else if UserInfo.Logout == true || UserInfo.ExpireTime <= 0 {
				delete(Info, i)
			}
		}
		mu.Unlock()
		time.Sleep(1000 * time.Millisecond)
	}
		wg.Done()
}

func TEST(w http.ResponseWriter, r *http.Request) {
	var Title string
	var ClassName string
	var Content string

	db, err := sql.Open("mysql", "root:000000@/ResumeInfo")

	if err != nil {
		log.Fatal(err)
	}

	row, err := db.Query("SELECT Title,ClassName,Content FROM Info")

	if err != nil {
		log.Fatal(err)
	}

	w.Header().Set("Content-Type", "application/json")
	JsonArray := []*MovePageInfo{}
	for row.Next() {

		err = row.Scan( &Title, &ClassName, &Content)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Println(Title)
		fmt.Println(ClassName)
		fmt.Println(Content)
		Info := new(MovePageInfo)
		Info.Title = Title
		Info.ClassName = ClassName
		Info.Content = Content

		JsonArray = append(JsonArray, Info)
	}
	json.NewEncoder(w).Encode(JsonArray)

	db.Close()

}

func StartServer() {
	http.Handle("/", http.FileServer(http.Dir("../WebSide/dist")))
	http.HandleFunc("/api/CreateSession",CreateSession)
	http.HandleFunc("/api/TEST", TEST)
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
	wg.Done()
}

func CreateSession(w http.ResponseWriter, r *http.Request) {

	Cookie := make([]byte,32)
	rand.Read(Cookie)
	KOK := base64.URLEncoding.EncodeToString(Cookie)

	cookie := http.Cookie{Name: "SessionCookie", Value: KOK ,MaxAge:86400}

	http.SetCookie(w, &cookie)
	CreateUserSession(KOK)
}
