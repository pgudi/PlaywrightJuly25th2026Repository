export {}
class Library{
    static libraryName:string="Govt Library"
    bookName!:string
    constructor(bookName:string){
        this.bookName=bookName
    }

    // Isntance Method
    showLibraryName():void{
        console.log("Library Name :"+Library.libraryName)
    }

    displayBookName():void{
        console.log("Book Name :"+this.bookName)
    }
}

let o:Library=new Library("Java Complete Reference")
o.showLibraryName()
o.displayBookName()