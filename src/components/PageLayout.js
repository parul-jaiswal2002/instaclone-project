import TopNavbar from "./TopNavbar";


export default function PageLayout({children}){
    return (
       <>
        <div id="page_container">
        <TopNavbar/>
        <div id="main-content">
           {children}
        </div>
        </div>
       </>

    )
}