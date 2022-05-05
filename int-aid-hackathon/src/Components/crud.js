import { useRef } from "react";
import { dbClient } from "../services/dbClient";
import CardWrapper from "./layout/CardWrapper";


const CreateTeacher = (props) => {

  //TODO: determine if state or refs is ideal. Component should unmount on nav, removing ref from the dom, so it *shouldn't* be exposed.
  const emailRef = useRef();
  const passRef = useRef();

  //handle click
  const handleClick = async (event) => {
    event.preventDefault();
    let email = emailRef.current.value
    let password = passRef.current.value
    // destructure return from auth signup method
    const { user, session, error } = await dbClient.auth.signUp({
      email: email,
      password: password 
    });

    //TODO: error handling, pending ui?, navigation
    if (user) {
      return console.log(session);
    } else {
      return console.error(error, 401);
    }
  };






const donorSignUpClick = async (event) => {
  event.preventDefault()
  let name = nameRef.current.value
  let city = cityRef.current.value
  // destructure return from auth signup method
  const { user, data, error } = await dbClient
    .from(
      
      {
    email: email,
    password: password,
  })

  //TODO: error handling, pending ui?, navigation
  if (user) {
    return console.log(session)
  } else {
    return console.error(error, 401)
  }
}


const handleClick = async (event) => {
  event.preventDefault()
  let email = emailRef.current.value
  let password = passRef.current.value
  // destructure return from auth signup method
  const { user, session, error } = await dbClient.auth.signUp({
    email: email,
    password: password,
  })

  //TODO: error handling, pending ui?, navigation
  if (user) {
    return console.log(session)
  } else {
    return console.error(error, 401)
  }
}

import SearchPageCard from "./SearchPageCard"
import { dbClient } from "../services/dbClient"
import { useEffect, useState } from "react"
import ShowTeachers from "./ShowTeachers"
import { Link } from "react-router-dom"

const SearchPage = (props) => {
  const [teacherPosts, setTeacherPosts] = useState([])

  useEffect(() => {
    getTeachers()
  }, [])

  const getTeachers = async () => {
    const { data, error } = await dbClient.from("teacher_profiles").select()
    setTeacherPosts(data)
  }

  console.log(teacherPosts)

  const mappedPosts = teacherPosts.map((teacher, idx) => {
    return (
      <div>
        <ul key={`teacher-${idx}`}>
          <li>
            <h1>{teacher.name}</h1>
            <h2>{teacher.school}</h2>
            <h3>{teacher.country}</h3>
            <img src={teacher.user_img_url} alt={teacher.name}></img>
          </li>
        </ul>
        <Link to={`/search/${teacher.id}`}><button>gimme stuff</button></Link>
      </div>
    )
  })

  return (
    <div>
      <div className="hero min-h-full bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-xlg">
            <h1 className="text-4xl font-bold">
              WE HELP EDUCATORS AROUND THE <br /> GLOBE GET THE SUPPLIES THEY
              NEED
            </h1>
          </div>
        </div>
      </div>
      <h2 className="text-left mx-10">Filter By:</h2>
      <div className="flex justify-between">
        <div>
          <select class="select select-primary select-xs mx-10 max-w-xs">
            <option disabled selected>
              Location
            </option>
            <option>All</option>
            <option>USA</option>
            <option>Other</option>
            <option>Other</option>
            <option>Other</option>
          </select>
          <select class="select select-primary select-xs mx-10 max-w-xs">
            <option disabled selected>
              Age of Students
            </option>
            <option>All</option>
            <option>3-5 years</option>
            <option>6-10 years</option>
            <option>11-13 years</option>
            <option>14 +years</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="input input-xs input-bordered mx-10 max-w-xs"
        />
      </div>
      {mappedPosts}
      <SearchPageCard />
      {/* <ShowTeachers /> */}
    </div>
  )
}

export default SearchPage
