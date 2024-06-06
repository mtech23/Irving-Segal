import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import BackButton from "../../Components/BackButton";
import CustomModal from "../../Components/CustomModal";
import CustomButton from "../../Components/CustomButton";
import { GetBookdetail, Getchaptersdetailbyid, DeleteChapter, GetchaptersDelete, Getpagedetail, pageDelete, Addchapter, Getchaptersbyid, addPages   } from '../../api'
import Accordion from 'react-bootstrap/Accordion';
import { Link, useNavigate } from "react-router-dom";
import { SelectBox } from "../../Components/CustomSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomInput from "../../Components/CustomInput";

import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";







// Getchaptersdetailbyidbyid







export const BookDetails = () => {


  const Bookstatus = [
    {
      key: "0",
      name: "free",
    },
    {
      key: "1",
      name: "paid",
    },]
  const { id } = useParams();
  const [chapterdata, setChapterData] = useState([]);

  const base_url = process.env.REACT_APP_BASE_URL
  const [Bookdetail, setBookdetail] = useState({});
  const [chapterdetailbyid, setChapterdetailbyid] = useState({});

  const [isChapter, setIsChapter] = useState(false);

  const [showModalchapter, setShowModalChapter] = useState(false);
  const [showeditchapter, setEditChapter] = useState(false);

  const [editModal, setEditModal] = useState(false);
  const [pageModal, setpageModal] = useState(false);

  const [addpageModal, setaddpageModal] = useState(false);

  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [message, setMessage] = useState(false)

  const [chapterpageid, setchapterpageid] = useState()
  const [chapterpageidpage, setchapterpageidpage] = useState()
  console.log("chapterpageidpage", chapterpageidpage)

  const [addpage, setAddpage] = useState(false)

  console.log("chapterdetailbyid", chapterdetailbyid)
  const [pagesadd, setPagesadd] = useState({})
  console.log("pagesadd", pagesadd)

  const [pagesdetail, setPagesdetail] = useState()
  const [formData, setFormData] = useState({});

  const [data, setData] = useState({});

  console.log("pagesdetail", pagesdetail)
  const inActive = () => {
    // setShowModal(false)
    setShowModal2(true)
  }
  const Active = () => {
    setShowModal3(false)
    setShowModal4(true)
  }
  console.log("id", id)

  const bookdetail = async () => {
    try {
      const response = await GetBookdetail(id)
      console.log("response", response)


      setBookdetail(response?.data)

    } catch (error) {
      console.error("Error in logging in:", error);

      // toastAlert(error, ALERT_TYPES.ERROR);
    }
  };






  const Getchapterssbyid = async (id) => {
    console.log("idchap", id)
    try {
      const response = await Getchaptersbyid(id)
      // setEditModal(true)
      console.log("response", response)


      setFormData(response?.data)

    } catch (error) {
      console.error("Error in logging in:", error);

      // toastAlert(error, ALERT_TYPES.ERROR);
    }
  };



  // const  deleteChapter = async (id) => {
  //   console.log(" chapid" ,id )
  //   document.querySelector('.loaderBox').classList.add("d-none");
  //   try {
  //     const response = await DeleteChapter(id)
  //     console.log("response", response)

  //     document.querySelector('.loaderBox').classList.remove("d-none");
  //     setBookdetail(response?.data)

  //   } catch (error) {
  //     console.error("Error in logging in:", error);

  //     // toastAlert(error, ALERT_TYPES.ERROR);
  //   }
  // };








  const deleteChapter = async (id) => {

    document.querySelector('.loaderBox').classList.add("d-none");

    try {
      const response = await DeleteChapter(id);
      document.querySelector('.loaderBox').classList.add("d-none");
      console.log("response", response)


      if (response?.status == true) {
        document.querySelector('.loaderBox').classList.remove("d-none");
        chapterData()
      }
    } catch (error) {
      document.querySelector('.loaderBox').classList.remove("d-none");
      console.error("Error in logging in:", error);

      // toastAlert(error, ALERT_TYPES.ERROR);
    }



  }



  useEffect(() => {
    bookdetail()
  }, [id])
  const [shapterstatus, setChapterstatus] = useState()
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name == "status") {

      setChapterstatus(value)
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData)
  };




  const handlechapterfile = (event) => {
    const file = event.target.files[0];
    // console.log(file.name)
    if (file) {
      const fileName = file;
      setPagesadd((prevData) => ({
        ...prevData,
        image: fileName,
      }));
    }
    console.log(formData);
  };







  console.log("pagesadd", pagesadd)





  const handlepageChange = (event) => {
    const { name, value } = event.target;

    setPagesadd((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData)
  };







  console.log("shapterstatus", shapterstatus)


  const chapterData = async () => {


    document.title = 'IRV Segal | Book Chapters Detail';
    document.querySelector('.loaderBox').classList.remove("d-none");

    try {
      const response = await Getchaptersdetailbyid(id); // Make sure bookid is passed correctly
      document.querySelector('.loaderBox').classList.add("d-none");
      console.log("shapter", response);

      setChapterData(response?.data);
      setFormData(response?.data);
    } catch (error) {
      document.querySelector('.loaderBox').classList.add("d-none");
      console.log(error);
    }
  }






  const pagedelete = async (id) => {
    document.querySelector('.loaderBox').classList.remove("d-none");
    try {
      const response = await pageDelete(id);
      console.log("response", response)


      if (response?.status == true) {
        document.querySelector('.loaderBox').classList.add("d-none");
        chapterData()
      }
    } catch (error) {
      console.error("Error in logging in:", error);

    }
  };




  const [Viewpage, setViewpage] = useState(false)

  const viewpages = async (id) => {
    try {
      const response = await Getpagedetail(id)
      console.log("response", response)


      setPagesadd(response?.data)

    } catch (error) {
      console.error("Error in logging in:", error);

      // toastAlert(error, ALERT_TYPES.ERROR);
    }
  }


  const handleSubmitchapter = async (e) => {
    e.preventDefault();
    document.querySelector('.loaderBox').classList.remove("d-none");



    const formDataMethod = new FormData();
    for (const key in formData) {
      formDataMethod.append(key, formData[key]);
    }
    formDataMethod.append('book_id', id);

    document.querySelector('.loaderBox').classList.remove("d-none");
    // Make the fetch request

    try {
      const response = await Addchapter(formDataMethod);
      document.querySelector('.loaderBox').classList.remove("d-none");

      if (response?.status == true) {

        setShowModalChapter(true)
        chapterData()
        setEditModal(false)
        setIsChapter(!isChapter)


      } else {

      }
    } catch (error) {
      console.error("Error in adding model post:", error);
    }
  }


  const handlepageadd = async (e) => {
    e.preventDefault();
    document.querySelector('.loaderBox').classList.remove("d-none");



    const formDataMethod = new FormData();
    for (const key in pagesadd) {
      formDataMethod.append(key, pagesadd[key]);
    }

    formDataMethod.append('chapter_id', chapterpageid);



    document.querySelector('.loaderBox').classList.remove("d-none");


    try {
      const response = await addPages(formDataMethod);
      document.querySelector('.loaderBox').classList.remove("d-none");

      if (response?.status == true) {
        setAddpage(false)
        chapterData()



      } else {

      }
    } catch (error) {
      console.error("Error in adding model post:", error);
    }
  }


  const [Editpage, setEditpage] = useState(false)

  const handlepageedit = async (e) => {
    e.preventDefault();
    document.querySelector('.loaderBox').classList.remove("d-none");



    const formDataMethod = new FormData();
    for (const key in pagesadd) {
      formDataMethod.append(key, pagesadd[key]);
    }


    formDataMethod.append('chapter_id', chapterpageid);



    document.querySelector('.loaderBox').classList.remove("d-none");


    try {
      const response = await addPages(formDataMethod);
      document.querySelector('.loaderBox').classList.remove("d-none");

      if (response?.status == true) {
        setEditpage(false)
        chapterData()



      } else {

      }
    } catch (error) {
      console.error("Error in adding model post:", error);
    }
  }












  const handlechapterEdit = async (e) => {
    e.preventDefault();
    document.querySelector('.loaderBox').classList.remove("d-none");



    const formDataMethod = new FormData();
    for (const key in formData) {
      formDataMethod.append(key, formData[key]);
    }
    formDataMethod.append('book_id', id);

    document.querySelector('.loaderBox').classList.remove("d-none");
    // Make the fetch request

    try {
      const response = await Addchapter(formDataMethod);
      document.querySelector('.loaderBox').classList.remove("d-none");

      if (response?.status == true) {


        setEditModal(false)

        chapterData()
        setEditChapter(true)




      } else {

      }
    } catch (error) {
      console.error("Error in adding model post:", error);
    }
  }




  useEffect(() => {
    chapterData()
  }, [id]);



  const handleEdit = async (e) => {
    // console.log("chapetrid ", chapetrid)
    // e.preventDefault();

    // const LogoutData = localStorage.getItem('login');
    // fetch(`https://custom.mystagingserver.site/Tim-WDLLC/public/api/author/bookchapter_update/${chapetrid}`,
    //     {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${LogoutData}`
    //         },
    //         body: JSON.stringify(leadData)
    //     },
    // )
    //     .then((response) => {
    //         return response.json()
    //     })
    //     .then((data) => {
    //         console.log(data)
    //         Getchaptersbyid(chapetrid)
    //         setEditModal(false)
    //     })
    //     .catch((error) => {
    //         document.querySelector('.loaderBox').classList.add("d-none");
    //         console.log(error);
    //     })





    //   event.preventDefault();

    //   document.querySelector('.loaderBox').classList.remove("d-none");
    //   const formDataMethod = new FormData();
    //   for (const key in formData) {
    //       formDataMethod.append(key, formData[key]);
    //   }


    //   document.querySelector('.loaderBox').classList.remove("d-none");
    //   // Make the fetch request

    //   try {
    //       const response = await Addbook(formDataMethod);

    //       if (response?.status == true) {
    //         console.log(data)
    //                 Getchaptersbyid(chapetrid)
    //                 // setEditModal(false)

    //       } else {

    //       }
    //   } catch (error) {
    //           document.querySelector('.loaderBox').classList.add("d-none");
    // }





  }





  return (
    <>
      <DashboardLayout>
        <div className="dashCard mb-4">
          <div className="row mb-3">
            <div className="col-12 mb-2">
              <h2 className="mainTitle">
                <BackButton />
                Books Details
              </h2>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              {/* <div className="row mb-3 justify-content-end">
                <div className="col-lg-4 text-end order-1 order-lg-2 mb-3">
                  <button onClick={() => {
                    data?.status ? setShowModal(true) : setShowModal3(true)
                  }} className="notButton primaryColor fw-bold text-decoration-underline">Mark as {data?.status ? 'Inactive' : 'Active'}</button>
                  <span className={`statusBadge ${data?.status == 1 ? 'statusBadgeActive' : 'statusBadgeInactive'}`}>{data?.status == 1 ? 'Active' : 'Inactive'}</span>
                </div>
              </div> */}

              <div className="row" >
                <div className="col-md-6 mb-4">

                  <div className="productImage">
                    <img src={base_url + Bookdetail?.cover} />
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <p className="secondaryText">Author Name</p>
                  <p>{Bookdetail?.author}</p>
                </div>
                <div className="col-md-6 mb-4">
                  <p className="secondaryText">Title</p>
                  <p>{Bookdetail?.title}</p>
                </div>
                <div className="col-md-6 mb-4">
                  <p className="secondaryText">Book Type</p>
                  <p>{Bookdetail?.type}</p>
                </div>
                <div className="col-md-6 mb-4">
                  <p className="secondaryText">Book Language</p>
                  <p>
                    {Bookdetail?.lang}
                  </p>
                </div>
                <div className="col-md-6 mb-4">
                  <p className="secondaryText">Book Pages</p>
                  <p>{Bookdetail?.pages}</p>
                </div>
                <div className="col-md-6 mb-4">
                  <p className="secondaryText">Audiobook Duration</p>
                  <p>{Bookdetail?.audiobook_duration}</p>
                </div>
                <div className="col-md-6 mb-4">
                  <p className="secondaryText">Book  Rating</p>
                  <p>{Bookdetail?.rating == null ? "No Rating" : Bookdetail?.rating}</p>
                </div>
                <div className="col-md-6 mb-4">
                  <p className="secondaryText">Description</p>
                  <p>{Bookdetail?.description}</p>
                </div>

              </div>





















              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex justify-content-between">
                    <h2 className="mainTitle mb-4">
                      Book Chapters
                    </h2>
                    <div className="addChapter">
                      <CustomButton text="Add Chapter" variant="primaryButton" onClick={(() => {
                        setIsChapter(!isChapter)
                      })}></CustomButton>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <Accordion defaultActiveKey="0">
                    {chapterdata && chapterdata?.map((item, index) => (
                      <Accordion.Item eventKey={index}>
                        <Accordion.Header>{`Chapter ${index + 1}`}</Accordion.Header>
                        <Accordion.Body>
                          <div className="chapeditz d-flex">
                            <h4 className="text-capitalize ">{item?.title}</h4  >

                            <p className=" gap-2">
                              <span>
                                <Link onClick={() => {
                                  setEditModal(true)
                                  Getchapterssbyid(item.chapter_id)
                                }} className="chaptableAction"><FontAwesomeIcon icon={faEdit} className="chaptableActionIcon" />Edit</Link>

                              </span>
                              <span className="deletechap  me-2">
                                <button type="button" className="bg-transparent border-0 ps-lg-3 pt-1" onClick={() => { deleteChapter(item?.chapter_id) }}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Delete</button>

                              </span>
                              <div className="addChapter  mt-2 ">
                                <CustomButton text="Add Page" variant="primaryButton" onClick={() => {
                                  setchapterpageid(item?.chapter_id);
                                  setAddpage(true);
                                }}></CustomButton>
                              </div>
                            </p>



                          </div>
                          <h3 className="text-capitalize">{item?.price}</h3>

                          {item.pages?.map((page, index) => (
                            //  <p> {`Page ${index + 1}`}</p>                            
                            <div className="   d-flex justify-content-between ">       {`Page ${index + 1}`}
                              <p className=" gap-3    d-flex">

                                <Link onClick={() => {
                                  setEditpage(true)

                                  setchapterpageid(item?.chapter_id);
                                  viewpages(page?.id)
                                  // editDetailData(item.id)
                                }} className="chaptableAction">    <FontAwesomeIcon icon={faEdit} className="chaptableActionIcon" /> Edit</Link>
                                <Link onClick={() => {
                                  setViewpage(true)
                                  setchapterpageid(item?.chapter_id);
                                  viewpages(page?.id)
                                }} className="chaptableAction"><FontAwesomeIcon icon={faEye} className="tableActionIcon" />View</Link>
                                <button type="button" className="bg-transparent border-0 ps-lg-3 pt-1" onClick={() => { pagedelete(page?.id) }}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Delete</button>
                              </p>
                            </div>
                          ))}
                          {/* <p> {item?.pages}</p> */}
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
                {isChapter && (
                  <div className="col-md-12 my-5 bg-light">
                    <div className="chapterAdditionForom">
                      <div className="titleBox mb-4">
                        <h3 className="mainTitle">Add New Chapter</h3>
                      </div>
                      <div className="ChapterForm col-md-6 mb-4">
                        <CustomInput
                          label='Chapter Title'
                          required
                          id='title'
                          type='text'
                          placeholder='Enter Chapter Title'
                          labelClass='mainLabel'
                          inputClass='mainInput'
                          name="title"
                          value={formData?.title}
                          onChange={handleChange}
                        />



                      </div>


                      <div className="ChapterForm col-md-6 mb-4">

                        <CustomInput
                          label='Chapter Audio'
                          required
                          id='audio_file'
                          type='file'
                          placeholder='Upload Chapter Audio'
                          labelClass='mainLabel'
                          inputClass='mainInput'
                          name='audio_file'
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <SelectBox
                          selectClass="mainInput"
                          name="status"
                          label="Chapter status"
                          placeholder="Chapter status"
                          required
                          value={formData?.status}
                          option={Bookstatus}
                          onChange={handleChange}
                        />

                      </div>


                      <div className="ChapterForm col-md-6 mb-4">
                        {shapterstatus === 'paid' && (
                          <CustomInput
                            label='Chapter price'
                            required
                            id='title'
                            type='text'
                            placeholder='Enter Chapter price'
                            labelClass='mainLabel'
                            inputClass='mainInput'
                            name="price"
                            value={formData?.price}
                            onChange={handleChange}
                          />
                        )}
                      </div>


                      <div className="addNewChapter">
                        <CustomButton text="Add  " variant="primaryButton" onClick={handleSubmitchapter}></CustomButton>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>



        </div>

        <CustomModal
          // show={showModal}
          close={() => {
            // setShowModal(false);
          }}
          action={inActive}
          heading="Are you sure you want to mark this user as inactive?"
        />
        <CustomModal
          show={showModal2}
          close={() => {
            setShowModal2(false);
          }}
          success
          heading="Marked as Inactive"
        />

        <CustomModal
          show={showModal3}
          close={() => {
            setShowModal3(false);
          }}
          action={Active}
          heading="Are you sure you want to mark this user as Active?"
        />
        <CustomModal
          show={showModal4}
          close={() => {
            setShowModal4(false);
          }}
          success
          heading="Marked as Active"
        />

        <CustomModal show={editModal} close={() => { setEditModal(false) }} heading="Edit Chapter" >
          <CustomInput
            label='Chapter Title'
            required
            id='title'
            type='text'
            placeholder='Enter Chapter Title'
            labelClass='mainLabel'
            inputClass='mainInput'
            name="title"
            value={formData?.title}
            onChange={handleChange}
          />
          <CustomInput
            label='Chapter Audio'
            required
            id='audio_file'
            type='file'
            placeholder='Upload Chapter Audio'
            labelClass='mainLabel'
            inputClass='mainInput'
            name='audio_file'
            onChange={handleChange}
          />

          <SelectBox
            selectClass="mainInput"
            name="status"
            label="Chapter status"
            placeholder="Chapter status"
            required
            value={formData?.status}
            option={Bookstatus}
            onChange={handleChange}
          />

          {formData?.status === 'paid' && (
            <CustomInput
              label='Chapter price'
              required
              id='title'
              type='text'
              placeholder='Enter Chapter price'
              labelClass='mainLabel'
              inputClass='mainInput'
              name="price"
              value={formData?.price}
              onChange={handleChange}
            />
          )}

          <CustomButton variant='primaryButton' text='Edit' type='button' onClick={handlechapterEdit} />

        </CustomModal>
















        <CustomModal show={addpage} close={() => { setAddpage(false) }} heading="Add Page" >
          <CustomInput
            label='  Page Number'
            required
            id='title'
            type='text'
            placeholder='Enter Page Number'
            labelClass='mainLabel'
            inputClass='mainInput'
            name="page_number"
            value={addpage?.page_number}
            onChange={handlepageChange}
          />
          <CustomInput
            label='Chapter Audio'
            required
            id='audio_file'
            type='file'
            placeholder='Upload Chapter Audio'
            labelClass='mainLabel'
            inputClass='mainInput'
            name='audio_file'
            onChange={handlepageChange}
          />



          <div className="inputWrapper">
            <div className="form-controls">
              <label htmlFor="">Content</label>
              <textarea
                name="content"
                className="form-control shadow border-0"
                id="description"
                cols="30"
                rows="10"
                value={pagesadd?.content}
                onChange={handlepageChange}
              ></textarea>
            </div>
          </div>


          <CustomButton variant='primaryButton' text='Add' type='button' onClick={handlepageadd} />

        </CustomModal>


        <CustomModal show={Editpage} close={() => { setEditpage(false) }} heading="Edit Page" >
          <CustomInput
            label='  Page Number'
            required
            id='title'
            type='text'
            placeholder='Enter Page Number'
            labelClass='mainLabel'
            inputClass='mainInput'
            name="page_number"
            value={pagesadd?.page_number}
            onChange={handlepageChange}
          />
          <CustomInput
            label='Chapter Audio'
            required
            id='audio_file'
            type='file'
            placeholder='Upload Chapter Audio'
            labelClass='mainLabel'
            inputClass='mainInput'
            name='audio_file'
            onChange={handlechapterfile}
          />



          <div className="inputWrapper">
            <div className="form-controls">
              <label htmlFor="">Content</label>
              <textarea
                name="content"
                className="form-control shadow border-0"
                id="description"
                cols="30"
                rows="10"
                value={pagesadd?.content}
                onChange={handlepageChange}
              ></textarea>
            </div>
          </div>


          <CustomButton variant='primaryButton' text='Edit' type='button' onClick={handlepageedit} />

        </CustomModal>



        <CustomModal show={Viewpage} close={() => { setViewpage(false) }} heading="Page Detail" >
          {/* <CustomInput
            label='  Page Number'
            required
            id='title'
            type='text'
            placeholder='Enter Page Number'
            labelClass='mainLabel'
            inputClass='mainInput'
            name="page_number"
            value={pagesadd?.page_number}
            onChange={handlepageChange}
          /> */}

        
          {/* <CustomInput
            label='Chapter Audio'
            required
            id='audio_file'
            type='file'
            placeholder='Upload Chapter Audio'
            labelClass='mainLabel'
            inputClass='mainInput'
            name='audio_file'
            onChange={handlechapterfile}
          /> */}
          <div className="col-md-6 mb-4">
            <p className="secondaryText">Page No</p>
            <p>{pagesadd?.page_number}</p>
          </div>
          <div className="col-md-12 mb-4">
            <p className="secondaryText">Content </p>
            <p>{pagesadd?.content}</p>
          </div>


          {/* <div className="inputWrapper">
            <div className="form-controls">
              <label htmlFor="">Content</label>
              <textarea
                name="content"
                className="form-control shadow border-0"
                id="description"
                cols="30"
                rows="10"
                value={pagesadd?.content}
                onChange={handlepageChange}
              ></textarea>
            </div>
          </div> */}


          {/* <CustomButton variant='primaryButton' text='Edit' type='button' /> */}

        </CustomModal>










        <CustomModal show={showModalchapter} close={() => { setShowModalChapter(false) }} success heading='Chapter Added Successfully.' />
        <CustomModal show={showeditchapter} close={() => { setEditChapter(false) }} success heading='Chapter Edit Successfully.' />
      </DashboardLayout>
    </>
  );
};

