import { ALERT_TYPES } from "./constants";
import { toastAlert } from "./utils";
 
// const url = "https://custom3.mystagingserver.site/Mike-Smith";
const url = process.env.REACT_APP_BASE_URL
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

//AddPost
export const Addmodelpost = async (data) => {
 
  try {
    const res = await fetch(`${url}api/model/post-add-edit`, {
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
 

//Editpost
export const Editmodelpost = async (id) => {
  try {
    const res = await fetch(`${url}api/model/post-add-edit/${id}`, {
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












//Post image Delete
export const PostImagedelete = async (id) => {
  try {
    const res = await fetch(`${url}api/model/post-image-delete/${id}/${id}`, {
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




//delete model post
export const deletemodelpost = async (id) => {
  try {
    const res = await fetch(`${url}api/model/post-delete/${id}`, {
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



//Get Books post detail
export const Getmodelpostdetail = async (id) => {
  try {
    const res = await fetch(`${url}api/model/post-view/${id}`, {
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




 