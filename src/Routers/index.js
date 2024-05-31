import { Route, Routes, BrowserRouter } from "react-router-dom";

import AdminLogin from "../Screens/Auth/Login";
import ForgetPassword from "../Screens/Auth/ForgetPassword";
import ForgetPassword2 from "../Screens/Auth/ForgetPassword2";
import ForgetPassword3 from "../Screens/Auth/ForgetPassword3";
import { Dashboard } from "../Screens/Dashboard";
  


// import { BookManagement } from "../Screens/BookManagement";
// import { AddBook } from "../Screens/BookManagement/AddBook";
// import { BookDetails } from "../Screens/BookManagement/BookDetail";
// import { EditBook } from "../Screens/BookManagement/EditBook";

import { BookManagement } from "../Screens/bookManagement/index";
import { AddBook } from "../Screens/bookManagement/AddBook";
import { EditBook } from "../Screens/bookManagement/EditBook";
import { BookDetails } from "../Screens/bookManagement/BookDetail";




// import { ChapterManagement } from "../Screens/chapterManagement/index";
// import { AddChapter } from "../Screens/chapterManagement/Addchapter";
// import { EditChapter } from "../Screens/chapterManagement/Editchapter";
// import { ChapterDetails } from "../Screens/chapterManagement/chapterDetail";




// import { MenuManagement } from "../Screens/MenuManagement";
// import { AddMenu } from "../Screens/MenuManagement/AddMenu";
// import { EditMenu } from "../Screens/MenuManagement/EditMenu";

import { CustomiseMenu } from "../Screens/CustomiseMenu";
import { AddMenu } from "../Screens/CustomiseMenu/AddMenu";
import { EditMenu } from "../Screens/CustomiseMenu/EditMenu";
import { CustomerSupport } from "../Screens/CustomerSupport";
import { CurrencyManagement } from "../Screens/CurrencyManagement";
import { ZipCode } from "../Screens/ZipCode";

// end



import Profile from "../Screens/Profile";
import EditProfile from "../Screens/Profile/EditProfile";
import ChangePassword from "../Screens/Profile/ChangePassword";
import { ProtectedRoutes } from "./ProtectedRoutes";
import Error from "../Screens/Error";


export default function AdminRouter() {
  return (
    <BrowserRouter basename="/irvSegal">
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/forget-password2" element={<ForgetPassword2 />} />
        <Route path="/forget-password3" element={<ForgetPassword3 />} />

        {/* <Route path="/dashboard" element={<ProtectedRoutes Components={Dashboard} />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/book-management" element={<BookManagement/>}   /> */}
        <Route path="/book-management" element={<ProtectedRoutes Components={BookManagement} />} />
        <Route path="/book-management/add-book" element={<ProtectedRoutes Components={AddBook} />} />
        <Route path="/book-management/book-details/:id" element={<ProtectedRoutes Components={BookDetails} />} />
        <Route path="/book-management/edit-book/:id" element={<ProtectedRoutes Components={EditBook} />} />



{/* 
        <Route path="/chapter-management" element={<ProtectedRoutes Components={ChapterManagement} />} />
        <Route path="/chapter-management/add-chapter" element={<ProtectedRoutes Components={AddChapter} />} />
        <Route path="/chapter-management/chapter-details/:id" element={<ProtectedRoutes Components={ChapterDetails} />} />
        <Route path="/chapter-management/edit-chapter/:id" element={<ProtectedRoutes Components={EditChapter} />} /> */}




    
        <Route path="/customise-menu" element={<ProtectedRoutes Components={CustomiseMenu} />} />
        <Route path="/add-menu" element={<ProtectedRoutes Components={AddMenu} />} />
        {/* <Route path="/menu-management/menu-details/:id" element={<ProtectedRoutes Components={menuDetails} />} /> */}
        <Route path="/customise-menu/edit-menu/:id" element={<ProtectedRoutes Components={EditMenu} />} />

        <Route path="/zipcode-list" element={<ProtectedRoutes Components={ZipCode} />} />

        

        <Route path="/customer-support" element={<ProtectedRoutes Components={CustomerSupport} />} />
        <Route path="/currency-management" element={<ProtectedRoutes Components={CurrencyManagement} />} />

        
        <Route path="/profile" element={<ProtectedRoutes Components={Profile} />} />
        <Route path="/profile/edit-profile" element={<ProtectedRoutes Components={EditProfile} />} />
        <Route path="/profile/change-password" element={<ChangePassword />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
