import { ALERT_TYPES } from "./constants";
import { toastAlert } from "./utils";
 
// const url = "https://custom3.mystagingserver.site/Mike-Smith";
const url = `${process.env.REACT_APP_BASE_URL}api/`
//SIGN UP
export const userSignUpRequest = async (type, data) => {
  try {
    const res = await fetch(`${url}api/${type}-register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Convert data to JSON string
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      toastAlert(productData?.message, ALERT_TYPES.ERROR);
    } else {
      toastAlert(productData?.message, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};

//LOGIN
export const userLoginRequest = async (data) => {
  try {
    const res = await fetch(`${url}api/user-login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Convert data to JSON string
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      toastAlert(productData?.message, ALERT_TYPES.ERROR);
    } else {
      // toastAlert(productData?.message, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};

//LOGOUT
export const userLogoutRequest = async () => {
  try {
    const res = await fetch(`${url}logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("login")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      // toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};




const LogoutData = localStorage.getItem("login");

//AddBook
export const Addbook = async (data) => {
 
  try {
    const res = await fetch(`${url}books`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("login")}`,
      },
      body: data,
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      // toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      console.log("productData?.msg" , productData?.msg)
      // toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};
 

//EditEditBook
 export const Editbook = async (data) => {
 
  try {
    const res = await fetch(`${url}books`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("login")}`,
      },
      body: data,
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      // toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      console.log("productData?.msg" , productData?.msg)
      // toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};
 


















export const Addchapter = async (data) => {
 
  try {
    const res = await fetch(`${url}chapters`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("login")}`,
      },
      body: data,
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      // toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      console.log("productData?.msg" , productData?.msg)
      // toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};
 

//EditChpater
 export const Editchapter = async (data) => {
 
  try {
    const res = await fetch(`${url}chapters`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("login")}`,
      },
      body: data,
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      // toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      console.log("productData?.msg" , productData?.msg)
      // toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};
 





















//Get Chapter   list      
// export const Getchapterslist = async ( ) => {
//   try {
//     const res = await fetch(`${url}chapters`, {
//       method: "Get",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("login")}`,
//       },
//     });
//     console.log(res, "res");
//     // Ensure response is ok before proceeding

//     const productData = await res.json(); // Parse response JSON
//     console.log(productData, "res");
//     if (!res.ok) {
//       // toastAlert(productData?.msg, ALERT_TYPES.ERROR);
//     } else {
//       // toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
//     }

//     return productData; // Return parsed data
//   } catch (error) {
//     toastAlert(error, ALERT_TYPES.ERROR); // Handle error
//     throw error; // Rethrow error to be handled by caller
//   }
// };





 
//Get Books Delete  list
export const GetchaptersDelete = async (id) => {
  try {
    const res = await fetch(`${url}chapters/${id}`, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("login")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      // toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      // toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};





 

//Get chapters  detail
export const Getchaptersdetail = async (id) => {
  console.log("ides" , id)
  try {
    const res = await fetch(`${url}bookchapters/${id}`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("login")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};









 

//Get Books   list
export const Getbookslist = async ( ) => {
  try {
    const res = await fetch(`${url}books`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("login")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      // toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      // toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};






//Get Books Delete  list
export const GetbooksDelete = async (id) => {
  try {
    const res = await fetch(`${url}books/${id}`, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("login")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      // toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      // toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};



//Get Books  detail
export const GetBookdetail = async (id) => {
  console.log("ides" , id)
  try {
    const res = await fetch(`${url}books/${id}`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("login")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};




 

 

export const Getpagedetail = async (id) => {
  try {
    const res = await fetch(`${url}chapterpages/${id}`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("login")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      // toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      // toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};


export const pageDelete = async (id) => {
  try {
    const res = await fetch(`${url}pages/${id}`, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("login")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      // toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      // toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};
